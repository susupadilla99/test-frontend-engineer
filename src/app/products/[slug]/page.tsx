'use client'

import { ProductListing } from "@/components/typeDefinition";
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

export default function ProductDetails() {
    const path=usePathname();
    const [productData, setData] = useState<ProductListing|undefined>(undefined)

    useEffect( () => {
        fetch('https://fakestoreapi.com/products/'+path.split("/")[2])
            .then(res=>res.json())
            .then(json => {
                setData(json)
            })
    })
    
    if(productData === null || productData === undefined) return <div>Loading...</div>
    
    return (
        <div className="border-2 border-red-300">
        <Image src={productData.image} alt={productData.title} width={100} height={100}></Image>
        <h3 className="font-bold text-lg">{productData.title}</h3>
        <p>{productData.category}</p>
        <h4 className="font-bold mt-4">Description:</h4>
        <p className="text-gray-700 text-sm italic">{productData.description}</p>
        <p className="mt-4">Price: ${productData.price}</p>
        <p className="mt-4">Rating: {productData.rating.rate}/5 ({productData.rating.count} reviews)</p>
        </div>
    )
    
}