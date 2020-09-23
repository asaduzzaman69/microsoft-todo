import { ItemActionTypes } from './item.types'
import LIST_DATA from './demodata'
import { LIST_DETAILS } from './listDetails'


const INITIAL_STATE = {
  data: LIST_DATA,
  listDetails: LIST_DETAILS
}


const listReducer = (state = INITIAL_STATE, action) => {
  console.log(action)

  switch (action.type) {
    case ItemActionTypes.UPDATE_BACKGROUND_IMAGE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.title]: {
            ...state.data[action.payload.title],
            activeBackgroundColor: action.payload.image
          }

        }
      }

    case ItemActionTypes.ADD_TASK:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.title]: {
            ...state.data[action.payload.title],
            list: [...state.data[action.payload.title].list, action.payload.task]

          }

        }
      }
    case ItemActionTypes.CREATE_UNLISTED_TASK:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.title]: {
            title: action.payload.title,
            activeBackgroundColor: 'linear-gradient(to right bottom, #7488DA, #6175C4)',
            list: []
          }
        }

      }

    case ItemActionTypes.ADD_NEW_TASK:
      return {
        ...state,
        listDetails:{
          ...state.listDetails,
          [action.payload.which]:{
            ...state.listDetails[action.payload.title],
            list:[...state.listDetails.newList.list,action.payload]

          }

        }
      }

    default:
      return state;

  }
}

export default listReducer;