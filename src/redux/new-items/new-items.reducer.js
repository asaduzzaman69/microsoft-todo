import { newItemActionTypes } from './new-items.types'

const INITIAL_STATE = {
    newItems:[],
    hidden:true
}


const newItemReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {

        case newItemActionTypes.TOGGLE_POPUP:
            return {
                ...state,
                hidden:!state.hidden
            }
        case newItemActionTypes.ADD_NEW_LIST:
            return {
                ...state,
                newItems:[...state.newItems,action.payload]
            }
            default:
                return state;

    }
}

export default newItemReducer;