import { call,put } from 'redux-saga/effects'
import * as cartServices from '../api/productCart'
import { PRODUCT_CART_SUCCESS } from '../constant/actionTypes'
import { act_product_cart_success } from '../redux/action'

export const postProductCart = function* (action) {
   try {
     yield call(cartServices.PRODUCT_CART,action.payload)
     yield getProductCart()
   } catch (error) {
    
   }
}
export const getProductCart = function* () {
   try {
    let productCart = yield call(cartServices.GET_PRODUCT_CART)
    yield put(act_product_cart_success(PRODUCT_CART_SUCCESS,productCart))
   } catch (error) {
    console.log("error==>",error);
   }
}
export const shoppingCart = function* (action) {
 try {
  let productCart =  yield call(cartServices.SHOPPING_CART,action.payload) 
  yield  getProductCart()
 } catch (error) {
  console.log("error==>",error);
 }
}
export const setQuantity = function* (action) {
  try {
    yield call(cartServices.PUT_QUANTITY,action.payload)
  yield getProductCart()
  } catch (error) {
    console.log("error==>",error);
  }
}
export const patchCart = function* (action) {
  try {
    yield call(cartServices.PATCH_PRODUCT_CART,action.payload)
  yield getProductCart()
  } catch (error) {
    console.log("error==>",error);
  }
}
export const deleteCart = function* (action) {
  yield call(cartServices.DELETE_CART,action.payload)
  yield getProductCart()
}
export const clearCart = function* (action) {
  let productCart = yield call(cartServices.GET_PRODUCT_CART)
  productCart.forEach(cart => {
    cartServices.CLEAR_CART(cart.id)
  });
 
  yield getProductCart()
}