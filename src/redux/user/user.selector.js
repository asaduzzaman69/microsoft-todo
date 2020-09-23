import { createSelector } from 'reselect'

const user = state => state.user;

export const selectCurrentUser = createSelector(
   [user],
    user => user.currentUser
)