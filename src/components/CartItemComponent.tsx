'use client'

// import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartItem } from "./typeDefinition";
import { getCartItemByID, getCartItems, removeCartItemFromDB, removeProductItemFromDB, updateCartItemDB } from "@/utils/cart/cart";

export default function CartItemComponent({ id, setCartContent }: { id: number, setCartContent: Dispatch<SetStateAction<CartItem[] | undefined>> }) {

    const [data, setData] = useState<CartItem>();

    useEffect(() => {
        getCartItemByID(id, setData)
    }, [id])

    function handleIncrementQuantity() {
        if (data!=null)
            updateCartItemDB(data.product.id, data.quantity+1)
                .then(() => {
                    getCartItemByID(id, setData)
                    getCartItems(setCartContent)
                })
    }

    function handleDecrementQuantity() {
        if (data!=null && data.quantity>1)
            updateCartItemDB(data.product.id, data.quantity-1)
                .then(() => {
                    getCartItemByID(id, setData)
                    getCartItems(setCartContent)
                })
        else if (data!=null && data.quantity == 1)
            handleRemoveCartItem()
    }

    function handleRemoveCartItem() {
        removeCartItemFromDB(id)
            .then(() => removeProductItemFromDB(id)
                .then(() => {
                    setData(undefined)
                    getCartItems(setCartContent)
                }))
    }

    if (data == null) {
        return (
            <div></div>)
    }
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

                {/** Image */}
                <a href="#" className="shrink-0 md:order-1">
                    <Image
                        className="h-20 w-20 dark:hidden object-contain"
                        src={data.product.image}
                        alt="imac image"
                        width={80}
                        height={80}
                    />
                </a>

                {/** Quantity & Price */}
                <div className="flex items-center justify-between md:order-3 md:justify-end">

                    {/** Quantity */}
                    <div className="flex items-center">
                        <button
                            type="button"
                            id="decrement-button"
                            onClick={handleDecrementQuantity}
                            data-input-counter-decrement="counter-input"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h16"
                                ></path>
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="counter-input"
                            data-input-counter=""
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                            placeholder=""
                            value={data.quantity.toString()}
                            readOnly={true}
                            required={false}
                        />
                        <button
                            type="button"
                            id="increment-button"
                            onClick={handleIncrementQuantity}
                            data-input-counter-increment="counter-input"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                            <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 1v16M1 9h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/** Price */}
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                            {(data.product.price * data.quantity).toLocaleString('en-US',{style: 'currency', currency:'USD'})}
                        </p>
                    </div>
                </div>

                {/** Title & Remove Button */}
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">

                    {/** Title */}
                    <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                    >
                        {data.product.title}
                    </a>

                    {/** Remove from Cart */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={handleRemoveCartItem}
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                            <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                ></path>
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}