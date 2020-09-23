import { createSelector } from 'reselect'

const selectList = state => state.list



export const selectSpecificList = paramID => createSelector(
    [selectList],
    list => {
        return list.data[paramID]
    } 
)

export const selectListData = createSelector(
    [selectList],
    list => {
        console.log(list.listDetails)

        const res = Object.keys(list.listDetails).map(key => list.listDetails[key] )
       return res;
    } 
)


