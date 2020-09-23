import { newItemActionTypes } from './new-items.types'

export const toggleHidden = () => ({
    type:newItemActionTypes.TOGGLE_POPUP,
})

export const addNewItem = item => ({
    type:newItemActionTypes.ADD_NEW_LIST,
    payload:item
})