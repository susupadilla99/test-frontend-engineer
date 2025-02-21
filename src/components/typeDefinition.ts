type ProductListing = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

type CartItem = {
    product: ProductListing,
    quantity: number
}

export type { ProductListing, CartItem };