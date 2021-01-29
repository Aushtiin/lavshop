import { CART_ADD_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    console.log(state)
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const itemExit = state.cartItems.find(x => x.product === item.product)

            if (itemExit) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === itemExit.product ?
                        item : x
                    ),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        default:
            return state
    }
}