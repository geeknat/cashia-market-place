import {AddToCartItem, ShareProductItem, EventTypes} from "../types";
import postToCashia from "../util/postToCashia";

const AddToCart = (addToCartItem: AddToCartItem) => {
    let data = {...addToCartItem, event_type: EventTypes.ADD_TO_CART}
    postToCashia(JSON.stringify(data))
}

const ShareProduct = (shareProductItem: ShareProductItem) => {
    let data = {...shareProductItem, event_type: EventTypes.SHARE_ITEM}
    postToCashia(JSON.stringify(data))
}

export {AddToCart, ShareProduct}
