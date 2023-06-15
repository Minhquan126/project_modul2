import { TRAVEL_SUCCES } from "../../constant/actionTypes";
const initialState = []
export const travel = (state = initialState,action) => {
    switch (action.type) {
        case TRAVEL_SUCCES:
            return [...action.payload]
            
    
        default:
           return state
    }
}