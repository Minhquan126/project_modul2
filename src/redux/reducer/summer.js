import { SUMMER_SUCCES } from "../../constant/actionTypes"
const initialState = []
export const summer = (state = initialState,action) => {
   switch (action.type) {
    case SUMMER_SUCCES:
        return [...action.payload]
       
   
    default:
       return state
   }
}