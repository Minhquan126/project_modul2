import * as actionTypes from "../constant/actionTypes";
import { blockUser, getuser, login, postUser, putUser } from "./userSaga";
import { all,takeLatest } from "redux-saga/effects";
import { deleteProduct, editProduct, getcloth, getsummer, gettravel, postCloth, postSummer, postTravel, searchProduct } from "./productSaga";
import { clearCart, deleteCart, getProductCart, patchCart, postProductCart, setQuantity, shoppingCart } from "./productCartSaga";
export const rootSaga = function* () {
   yield all([
        takeLatest(actionTypes.POST_USER,postUser),
        takeLatest(actionTypes.UPLOAD_CLOTH,postCloth),
        takeLatest(actionTypes.UPLOAD_TRAVEL,postTravel),
        takeLatest(actionTypes.UPLOAD_SUMMER,postSummer),
        takeLatest(actionTypes.GET_CLOTH,getcloth),
        takeLatest(actionTypes.GET_TRAVEL,gettravel),
        takeLatest(actionTypes.GET_SUMMER,getsummer),
        takeLatest(actionTypes.GET_USER,getuser),
        takeLatest(actionTypes.LOGIN,login),
        takeLatest(actionTypes.DELETE_PRODUCT,deleteProduct),
        takeLatest(actionTypes.EDIT_PRODUCT,editProduct),
        takeLatest(actionTypes.GET_PRODUCT_CART,getProductCart),
        takeLatest(actionTypes.POST_PRODUCT_CART,postProductCart),
        takeLatest(actionTypes.SHOPPING_CART,shoppingCart),
        takeLatest(actionTypes.QUANTITY,setQuantity),
        takeLatest(actionTypes.PATCH_PRODUCT_CART,patchCart),
        takeLatest(actionTypes.DELETE_CART,deleteCart),
        takeLatest(actionTypes.SEARCH_PRODUCT,searchProduct),
        takeLatest(actionTypes.PUT_USER,putUser),
        takeLatest(actionTypes.CLEAR_CART,clearCart),
        takeLatest(actionTypes.BLOCK_USER,blockUser)
    ])
}