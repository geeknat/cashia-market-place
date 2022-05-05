export const EventTypes = {
    ADD_TO_CART: 'add_to_cart',
    SHARE_ITEM: 'share_item'
}

export interface AddToCartItem {
    productId: string,
    quantity?: number | null
}

export interface ShareProductItem {
    productId?: string | null,
    link: string
}
