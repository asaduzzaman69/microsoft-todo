import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import listReducer from './items/item.reducer'
import newItemReducer from './new-items/new-items.reducer'

const  rootReducer = combineReducers({
    user:userReducer,
    list:listReducer,
    newItem:newItemReducer
})

export default rootReducer
