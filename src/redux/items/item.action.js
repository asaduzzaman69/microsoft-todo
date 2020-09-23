import { ItemActionTypes } from './item.types'


export const updateBgImage = image  => ({
    type:ItemActionTypes.UPDATE_BACKGROUND_IMAGE,
    payload:image
})

export const  AddTask = task => ({
    type:ItemActionTypes.ADD_TASK,
    payload:task
})

export const addUnlistedTask = task => ({
    type:ItemActionTypes.CREATE_UNLISTED_TASK,
    payload:task
})

export const AddNewTask = newTask => ({
    type:ItemActionTypes.ADD_NEW_TASK,
    payload:newTask
})