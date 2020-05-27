import { v4 as uuidv5 } from "uuid";
import{GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
    items: [
        { id: uuidv5(), name: "Eggs" },
        { id: uuidv5(), name: "Milk" },
        { id: uuidv5(), name: "Steak" },
        { id: uuidv5(), name: "Candy" }
      ],
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
           return state;
    }
}