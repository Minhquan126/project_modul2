import { type } from "@testing-library/user-event/dist/type";
import * as actionTypes from "../constant/actionTypes";
export const act_post_user = (newUser) => {
    return {        
        type: actionTypes.POST_USER,
        payload: newUser
    }
}
export const act_get_user = () => {
return {
    type: actionTypes.GET_USER
}
}
export const act_getuser_success = (actionType,user) => {
    return {
        type: actionType,
        payload: user
    }
}
export const act_login = (email,password) => {
return {
    type: actionTypes.LOGIN,
    payload: {email,password}
}
}
export const act_login_success = (actionType,userLogin) => {
    return { 
        type: actionType,
        payload: userLogin
    }
}

export const act_upload_cloth = (cloth) => {
    return {
        type: actionTypes.UPLOAD_CLOTH,
        payload: cloth
    }
}
export const act_upload_travel = (travel) => {
    return {
        type: actionTypes.UPLOAD_TRAVEL,
        payload: travel
    }
}
export const act_upload_summer = (summer) => {
    return {
        type: actionTypes.UPLOAD_SUMMER,
        payload: summer
    }
}
export const act_get_cloth = () => {
    return {
        type: actionTypes.GET_CLOTH
    }
}
export const act_get_travel = () => {
    return {
        type: actionTypes.GET_TRAVEL
    }
}
export const act_get_summer = () => {
    return {
        type: actionTypes.GET_SUMMER
    }
}
export const act_cloth_success = (actionType,product) => {
return { 
    type: actionType,
    payload: product
}
}
export const act_travel_success = (actionType,product) => {
return { 
    type: actionType,
    payload: product
}
}
export const act_summer_success = (actionType,product) => {
return { 
    type: actionType,
    payload: product
}
}
export const act_logout_user = () => {
    return {
        type: actionTypes.LOGOUT_USER
    }
}
export const act_delete_product = (id) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: id
    }
}
export const act_edit_product = (newProduct) => {
    return {
        type: actionTypes.EDIT_PRODUCT,
        payload: newProduct
    }
}
export const act_edit_success = (actionType,editProduct) => {
    return {
        type: actionType,
        payload: editProduct
    }
}
export const act_product_acrt = (userId,product) => {
   
return {
    type: actionTypes.POST_PRODUCT_CART,
    payload: {userId,product}
}
}
export const act_patch_cart = (product) => {
    return {
type: actionTypes.PATCH_PRODUCT_CART,
payload : product
    }
}
export const act_get_productCart = () => {
    return {
        type: actionTypes.GET_PRODUCT_CART
    }
}
export const act_product_cart_success = (actionType,productCart) => {
    return {
        type: actionType,
        payload: productCart
    }
}
export const act_shopping_cart = (user) => {
    return {
        type: actionTypes.SHOPPING_CART,
        payload: user

    }
}
export const act_quantity = (product) => {
    return {
        type: actionTypes.QUANTITY,
payload: product
    }
}
export const act_delete_cart = (id) => {
    return {
        type: actionTypes.DELETE_CART,
        payload: id
    }
}
export const act_search_product = (searchData) => {
    return {
        type: actionTypes.SEARCH_PRODUCT,
    payload: searchData
    }
}
export const act_get_search = () => {
    return {
        type: actionTypes.GET_SEARCH
    }
}
export const act_search_success = (actionType,productSearch) => {
    return {
        type: actionType,
        payload: productSearch
    }
}
export const act_put_user = (newUser) => {
return {
    type: actionTypes.PUT_USER,
    payload: newUser
}
}
export const act_clear_cart = (cartId) => {
    return {
        type: actionTypes.CLEAR_CART,
        payload: cartId
    }
}
export const act_block_user = (userId,status) => {
    return {
        type: actionTypes.BLOCK_USER,
        payload: {userId,status}
    }
}