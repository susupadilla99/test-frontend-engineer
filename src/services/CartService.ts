import { CartItem, ProductListing } from "@/components/typeDefinition";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace CartService {
    let cartContent: CartItem[] = [];

    export function getCart() {
        return cartContent;
    }

    export function addItem(product: ProductListing) {
        const foundItems: CartItem[] = cartContent.filter(
            (item) => item.product.id === product.id
        );
        if (foundItems.length === 0) {
            cartContent.push({
                product: product,
                quantity: 1,
            });
        } else {
            removeItem(product)
            cartContent.push({
                product: foundItems[0].product,
                quantity: foundItems[0].quantity+1,
            })
        }
    }

    export function removeItem(product: ProductListing) {
        cartContent = cartContent.filter((item) => item.product.id === product.id)
    }
}
