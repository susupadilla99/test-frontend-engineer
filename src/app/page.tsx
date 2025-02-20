import Image from "next/image";
import { ProductListing } from "@/components/typeDefinition";
import Link from "next/link";

export default async function Home() {

  var data: ProductListing[] | undefined = await fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>data = json)

  function renderProduct(productData: ProductListing) {
    return (
      <div key={productData.id} className=" hover:bg-gray-200 active:bg-gray-400">
        <Link href={"/products/"+productData.id}>
          <Image src={productData.image} alt={productData.title} width={100} height={100}></Image>
          <h3 className="font-bold text-lg">{productData.title}</h3>
          <p>{productData.category}</p>
          <h4 className="font-bold mt-4">Description:</h4>
          <p className="text-gray-700 text-sm italic">{productData.description}</p>
          <p className="mt-4">Price: ${productData.price}</p>
          <p className="mt-4">Rating: {productData.rating.rate}/5 ({productData.rating.count} reviews)</p>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Product Listing Page</h1>
        <div className="grid grid-cols-4 gap-4">
          {
            (data === null || data === undefined) ?
            <p>Loading...</p> :
            data.map((product:ProductListing) => renderProduct(product))
          }
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
