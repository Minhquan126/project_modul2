import { SEARCH_SUCCESS } from "../../constant/actionTypes";
const initialState = []
export const listSearch = ( state = initialState,action) => {
    switch (action.type) {

        case SEARCH_SUCCESS:
           
            return [...action.payload]
         
        default:
           return state
    }
}