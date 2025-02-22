'use client'

import { createClient } from "@supabase/supabase-js"

export default async function Test() {
    
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    const data = await supabase.from("Test").select()
    const data2 = await supabase.from("TestChildren").select().eq('id',data.data![0].id)

    console.log(data.data)
    console.log(data2.data)

    return ( 
        <div className="mt-8 text-center">
            <h2 className="text-4xl">Hello World</h2>
        </div>
    )
}