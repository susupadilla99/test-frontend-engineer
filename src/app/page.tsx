import { ProductListing } from "@/components/typeDefinition";
import CardComponent from "@/components/CardComponent";

export default async function Home() {
  // eslint-disable-next-line no-var
  var data: ProductListing[] = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => (data = json));

  if (data === null || data === undefined) return (<div>Loading...</div>)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Product Listing Page</h1>

        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {data.map((prod) => (
                <CardComponent key={prod.id} data={prod} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
