'use client'

import { createClient } from "@supabase/supabase-js"
import { useEffect, useState } from "react";

export default function Test() {
    const [data, setData] = useState();
    const [data2, setData2] = useState();
    
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    useEffect(() => {
        supabase.from("Test").select()
            .then((res) => setData(res.data))
            .then(() => console.log(data))

        supabase.from("TestChildren").select()
            .then((res) => setData2(res.data))
            .then(() => console.log(data2))
    }, [])
    
    return ( 
        <div className="mt-8 text-center">
            <h2 className="text-4xl">Hello World</h2>
            <p>{JSON.stringify(data)}</p>
            <hr></hr>
            <p>{JSON.stringify(data2)}</p>
        </div>
    )
}