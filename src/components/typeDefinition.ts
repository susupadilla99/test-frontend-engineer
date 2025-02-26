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
    created_at: Date,
    quantity: number
}

type CartState = {
    cart: {
        content: CartItem[]
    } 
}

export type { ProductListing, CartItem, CartState };