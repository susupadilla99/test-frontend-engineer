import { ProductListing } from "@/components/typeDefinition";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export function addToCart(data: ProductListing) {
    return doesCartItemExist(data.id)
        .then((res) => {
            console.log(res)
            // If no previous data, add new Product & CartItem data
            if(res.data == null || res.data.length === 0 ) {
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
                updateCartItemDB(data.id, res.data[0].quantity+1)
                    .then((r) => {
                        console.log(r)
                        return r
                    })
            }
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

function updateCartItemDB(id: number, qty: number) {
    return supabase.from('CartItem')
        .update({quantity: qty})
        .eq('id', id)
        .then((res)=>res)
}