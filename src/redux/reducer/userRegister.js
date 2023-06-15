import { GET_SUCCESS } from "../../constant/actionTypes";
const initialState = []
export const listUsers = ( state = initialState,action) => {
   
    switch (action.type) {
        
        case GET_SUCCESS:
            return [...action.payload];
                   default:
           return state
    }
    
}