import { combineReducers } from "redux";
import { userlogin } from "./users";
import { cloth } from "./cloth"
import { travel } from "./travel"
import { summer } from "./summer"
import { loginUser } from "./loginUser";
import {productCart} from "./shoppingCart"
import { listSearch } from "./searchProduct";
import { listUsers } from "./userRegister";
export const rootReducer = combineReducers({ userlogin,cloth,travel,summer,loginUser,productCart,listSearch,listUsers })