import * as userServices from "../api/usersServices";
import { call,put } from 'redux-saga/effects';
import { GET_SUCCESS, LOGIN_SUCCESS, USER_SUCCES } from "../constant/actionTypes";
import { act_getuser_success, act_login_success } from "../redux/action";
import { clearCart } from "./productCartSaga";
export const postUser = function* (action) {
    console.log("action sagauser",action.payload);
try {
  let listUsers =   yield call(userServices.POST_USER,action.payload)
    yield put(act_getuser_success(USER_SUCCES),listUsers)
} catch (error) {
    console.log("error==>",error);
}
}
export const getuser = function* () {
  let user =   yield call(userServices.GET_USER)
    yield put(act_login_success(GET_SUCCESS,user))
}
export const login = function* (action) {
    try {
        let userLogin = yield call(userServices.LOGIN,action.payload)      
        yield put(act_login_success(LOGIN_SUCCESS,userLogin))
    } catch (error) {
        console.log("error==>",error);
    }
}
export const putUser = function* (action) {
    console.log(action.payload);
    try {
        console.log("vao try k");
       yield call(userServices.PUT_USER,action.payload)
       
     
    } catch (error) {
        console.log("error==>",error);
    }
}
export const blockUser = function* (action) {
try {
    yield call(userServices.BLOCK_USER,action.payload)
} catch (error) {
    console.log("error==>",error);
}
}