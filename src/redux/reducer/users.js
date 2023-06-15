import * as actionTypes from "../../constant/actionTypes"

let user  = JSON.parse(localStorage.getItem("user"))
const initialState = user ?? []
export const userlogin = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem("user",JSON.stringify(action.payload))
            return [...action.payload]
        case actionTypes.LOGOUT_USER:
            localStorage.removeItem("user")
            return []
        default:
            return state
    }
}

