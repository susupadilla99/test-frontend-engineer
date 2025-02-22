'use client'

import { ProductListing } from "./typeDefinition"
import { addToCart } from "@/utils/cart/cart"

export default function AddToCartButton({ data }: { data: ProductListing }) {

    function handleAddToCart() {
        addToCart(data)
            .then((res) => {
                console.log(res)
                alert("Item added to cart")
            })
    }

    return (
        <button
            type="button"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 max-h-40"
            onClick={handleAddToCart}
        >
            <svg
                className="-ms-2 me-2 h-5 w-5"
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
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                ></path>
            </svg>
            Add to cart
        </button>
    )
}