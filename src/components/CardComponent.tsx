import { Card } from "flowbite-react";
import { ProductListing } from "./typeDefinition";
import Link from "next/link";

export default function CardComponent({data}: {data:ProductListing}) {
  return (
    <Card
      className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"
      imgSrc={data.image}
      imgAlt={data.title}
    >
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="pt-6">
          <Link
            href="#"
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
          >
            Apple iPhone 15 Pro Max, 256GB, Blue Titanium
          </Link>
        </div>
      </div>
    </Card>
  );
}
