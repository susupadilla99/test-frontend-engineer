'use client'

import { CartItem, ProductListing } from "@/components/typeDefinition";
import { addToCart, getCartItems, removeCartItemFromDB, removeProductItemFromDB, updateCartItemDB } from "@/utils/database/database";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        content: await getCartItems()
    },
    reducers: {
        add: (state, action: { payload: ProductListing }) => {
            if (state.content != null) { // Only actions if cart content is already loaded
                state.content.push({
                    product: action.payload,
                    created_at: new Date(),
                    quantity: 1
                })
                addToCart(action.payload)
                    .then(() => alert("Item added to cart"))
            }

        },
        remove: (state, action: { payload: number }) => {
            if (state.content != null) {
                state.content = state.content.filter((v) => v.product.id != action.payload)
                removeCartItemFromDB(action.payload)
                removeProductItemFromDB(action.payload)
            }
        },
        increment: (state, action: { payload: CartItem }) => {
            if (state.content != null) {
                const matchingElems = state.content.filter(v => v.product.id == action.payload.product.id)
                if (matchingElems.length > 0) {
                    const tempCart = state.content.filter(v => v.product.id != action.payload.product.id)
                    tempCart.push({
                        product: action.payload.product,
                        created_at: action.payload.created_at,
                        quantity: action.payload.quantity + 1
                    })
                    state.content = tempCart
                    console.log("Increment",action.payload)
                    updateCartItemDB(action.payload.product.id, action.payload.quantity + 1)
                }

            }
        },
        decrement: (state, action: { payload: CartItem }) => {
            if (state.content != null) {
                const matchingElems = state.content.filter(v => v.product.id == action.payload.product.id)
                if (matchingElems.length > 0) {
                    if (action.payload.quantity <= 1) {
                        state.content = state.content.filter((v) => v.product.id != action.payload.product.id)
                        removeCartItemFromDB(action.payload.product.id)
                        removeProductItemFromDB(action.payload.product.id)
                    }
                    else {
                        const tempCart = state.content.filter(v => v.product.id != action.payload.product.id)
                        tempCart.push({
                            product: action.payload.product,
                            created_at: action.payload.created_at,
                            quantity: action.payload.quantity - 1
                        })
                        state.content = tempCart
                        updateCartItemDB(action.payload.product.id, action.payload.quantity-1)
                    }
                }
            }
        }
    }
})

export const { add, remove, increment, decrement } = cartSlice.actions

export default cartSlice.reducer