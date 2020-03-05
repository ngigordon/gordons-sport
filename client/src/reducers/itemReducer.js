import  {v4 as uuidv4} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuidv4(), name:"Soap" },
        { id: uuidv4(), name:"Sink" },
        { id: uuidv4(), name:"Sponge" },
        { id: uuidv4(), name:"Shampoo" }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
            default:
                return state;
    }
}