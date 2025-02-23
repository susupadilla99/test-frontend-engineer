"use client";

import Rating from "@/components/Rating";
import { ProductListing } from "@/components/typeDefinition";
import { addToCart } from "@/utils/cart/cart";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const path = usePathname();
  const [data, setData] = useState<ProductListing | undefined>(undefined);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + path.split("/")[2])
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  });

  function handleAddToCart() {
    if (data == null || data == undefined)
      alert("Content not yet loaded, please wait a few seconds and try again")
    else {
      addToCart(data)
        .then((res) => {
          console.log(res)
          alert("Item added to cart")
        })
    }
  }

  if (data === null || data === undefined) return <div>Loading...</div>;
  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/** Image */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <Image
              src={data.image}
              alt={data.title}
              className="w-full max-h-[400px]"
              style={{ objectFit: "contain" }}
              width={500}
              height={400}
            />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            {/** Title */}
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {data.title}
            </h1>

            {/** Price */}
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                {data.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>

            {/** Ratings */}
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <Rating rate={data.rating.rate}/>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  ({data.rating.rate})
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                  {data.rating.count} Reviews
                </a>
              </div>
            </div>

            {/** Add to cart */}
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <Link
                href="#"
                title=""
                className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                onClick={handleAddToCart}
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
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
              </Link>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800"></hr>

            {/** Description */}
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
