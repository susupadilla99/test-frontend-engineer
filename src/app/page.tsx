import { ProductListing } from "@/components/typeDefinition";
import CardComponent from "@/components/CardComponent";
import Hero from "@/components/Hero";

export default async function Home() {
  // eslint-disable-next-line no-var
  var data: ProductListing[] = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => (data = json));

  if (data === null || data === undefined) return (<div>Loading...</div>)
  return (
    <div>
      <Hero />

      <section className="bg-gray-50 py-4 antialiased dark:bg-gray-900 md:py-8">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/** Title */}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <h1 className="text-4xl font-bold">Product Listing Page</h1>
          </div>
          {/** Products */}
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((prod) => (
              <CardComponent key={prod.id} data={prod} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
