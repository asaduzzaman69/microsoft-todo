import { createSelector } from 'reselect'

const selectNewItem = state => state.newItem;


export const selectNewItemDetails = createSelector(
    [selectNewItem],
    list => list.newItems
)

export const selectNewItemVisibility = createSelector(
    [selectNewItem],
    item => {
        return item.hidden
    }
)