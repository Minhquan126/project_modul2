import { CLOTH_SUCCES, SEARCH_SUCCESS } from "../../constant/actionTypes"
const initialState = []
export const cloth = (state = initialState,action) => {
 switch (action.type) {
    case CLOTH_SUCCES:        
    return [...action.payload]
    default:
      return state
 }
}