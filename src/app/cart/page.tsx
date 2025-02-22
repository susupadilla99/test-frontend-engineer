'use client'

import CartItemComponent from "@/components/CartItemComponent";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Cart() {

    const [cartContent, setCartContent] = useState<number[]>();
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    useEffect(() => {
        supabase.from('CartItem').select()
            .then((res) => {
                if (res.data != null) {
                    const sortedData = res.data.sort((a, b) => b.created_at.localeCompare(a.created_at))
                    const tempData = sortedData.map((item) => item.id)
                    setCartContent(tempData)
                }
            })
    }, [])

    if (cartContent == null) {
        return (
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    {/** Title */}
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Shopping Cart
                    </h2>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        {/** Cart display */}
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                Loading... Please Wait
                            </div>
                        </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full"></div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                {/** Title */}
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    Shopping Cart
                </h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    {/** Cart display */}
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {cartContent.map((v) => <CartItemComponent key={v} id={v}/>)}
                        </div>
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full"></div>
                </div>
            </div>
        </section>
    );
}
