import { CartItem, ProductListing } from "@/components/typeDefinition";
import { createClient } from "@supabase/supabase-js";
import { Dispatch, SetStateAction } from "react";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export function addToCart(data: ProductListing) {
    return doesCartItemExist(data.id)
        .then((res) => {
            console.log(res)
            // If no previous data, add new Product & CartItem data
            if (res.data == null || res.data.length === 0) {
                addProductToDB(data)
                    .then((r) => {
                        console.log(r);
                        addCartItemToDB(data)
                            .then((r) => {
                                console.log(r)
                                return r
                            })
                    })
                // If previous data exist, update existing quantity
            } else {
                updateCartItemDB(data.id, res.data[0].quantity + 1)
                    .then((r) => {
                        console.log(r)
                        return r
                    })
            }
        })
}

export function getCartItems(setData: Dispatch<SetStateAction<CartItem[] | undefined>>) {
    supabase.from('CartItem').select()
        .then((cartRes) => {
            if (cartRes.data !== null)
                supabase.from('Product').select()
                    .then((prodRes) => {
                        if (prodRes.data !== null) {

                            const tempFullCart: CartItem[] = cartRes.data.map((v, i) => {
                                const tempProd: ProductListing = {
                                    id: prodRes.data[i].id,
                                    title: prodRes.data[i].title,
                                    price: prodRes.data[i].price,
                                    description: prodRes.data[i].description,
                                    category: prodRes.data[i].category,
                                    image: prodRes.data[i].image,
                                    rating: {
                                        rate: prodRes.data[i].rate,
                                        count: prodRes.data[i].count
                                    }
                                }

                                const tempCart: CartItem = {
                                    product: tempProd,
                                    quantity: v.quantity
                                }

                                return tempCart;
                            })
                            
                            console.log(tempFullCart)

                            setData(tempFullCart)
                        }
                    })
        })
}

export function getCartItemByID(id: number, setData: Dispatch<SetStateAction<CartItem | undefined>>) {
    return supabase.from('CartItem').select().eq('id', id)
        .then((cartRes) => {
            if (cartRes.data !== null)
                supabase.from('Product').select().eq('id', id)
                    .then((prodRes) => {
                        if (prodRes.data !== null) {
                            const tempProd: ProductListing = {
                                id: prodRes.data[0].id,
                                title: prodRes.data[0].title,
                                price: prodRes.data[0].price,
                                description: prodRes.data[0].description,
                                category: prodRes.data[0].category,
                                image: prodRes.data[0].image,
                                rating: {
                                    rate: prodRes.data[0].rate,
                                    count: prodRes.data[0].count
                                }
                            }

                            const tempCart: CartItem = {
                                product: tempProd,
                                quantity: cartRes.data[0].quantity
                            }

                            setData(tempCart)
                        }
                    })
        })
}

function addProductToDB(data: ProductListing) {
    return supabase.from('Product').insert({
        id: data.id,
        created_at: new Date(),
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rate: data.rating.rate,
        count: data.rating.count,
    })
}

function doesCartItemExist(id: number) {
    return supabase.from('CartItem').select().eq('id', id)
        .then((res) => res)
}

function addCartItemToDB(data: ProductListing) {
    return supabase.from('CartItem').insert({
        id: data.id,
        created_at: new Date(),
        product_id: data.id,
        quantity: 1
    })
}

export function removeCartItemFromDB(id: number) {
    return supabase.from('CartItem').delete().eq('id',id)
}

export function removeProductItemFromDB(id: number) {
    return supabase.from('Product').delete().eq('id',id)
}

export function updateCartItemDB(id: number, qty: number) {
    return supabase.from('CartItem')
        .update({ quantity: qty })
        .eq('id', id)
        .then((res) => res)
}