import { call,put } from 'redux-saga/effects'
import * as productService from '../api/productService'
import * as actionTypes from '../constant/actionTypes'
import { act_cloth_success, act_search_success, act_summer_success, act_travel_success } from '../redux/action'
export const postCloth = function* (action) {
try {
   let newProduct = yield call(productService.POST_CLOTH,action.payload)
} catch (error) {
    console.log("error==>",error);
}
}
export const postTravel = function* (action) {
try {
    yield call(productService.POST_TRAVEL,action.payload)
} catch (error) {
    console.log("error==>",error);
}
}
export const postSummer = function* (action) {
try {
    yield call(productService.POTS_SUMMER,action.payload)
} catch (error) {
    console.log("error==>",error);
}
}
export const getcloth = function* () {
   try {
    let product = yield call(productService.GET_CLOTH)    
yield put(act_cloth_success(actionTypes.CLOTH_SUCCES,product))
   } catch (error) {
    console.log("error==>",error);
   }   
}
export const gettravel = function* () {
   try {
    let product = yield call(productService.GET_TRAVEL)    
yield put(act_travel_success(actionTypes.TRAVEL_SUCCES,product))
   } catch (error) {
    console.log("error==>",error);
   }   
}
export const getsummer = function* () {
   try {
    let product = yield call(productService.GET_SUMMER)    
yield put(act_summer_success(actionTypes.SUMMER_SUCCES,product))
   } catch (error) {
    console.log("error==>",error);
   }   
}
export const deleteProduct = function* (action) {
    try {
        yield call(productService.DELETE_PRODUCT,action.payload)
        yield getcloth()
    } catch (error) {
        console.log("error==>",error);
    }
}
export const editProduct = function* (action) {
    try {
        let newProduct = yield call(productService.EDIT_PRODUCT,action.payload)
       yield getcloth()
    } catch (error) {
        console.log("error==>",error);
    }
}
export const searchProduct = function* (action) {
    try {
       let searchData =  yield call(productService.SEARCH_PRODUCT,action.payload)
       yield put(act_search_success(actionTypes.SEARCH_SUCCESS,searchData))
    } catch (error) {
        console.log("error==>",error);
    }
}