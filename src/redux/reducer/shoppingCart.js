import { PRODUCT_CART_SUCCESS } from "../../constant/actionTypes";
const initialState = []
export const productCart = (state = initialState,action) => {
    switch (action.type) {
        case PRODUCT_CART_SUCCESS:       
            return [...action.payload]   
        default:
            return state
    }
}