import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as Actions from '../users/users.actions'

export interface User {
    user: string;
    email: string;
    id: string;
}
export interface Users extends EntityState<User> { }

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();


export const initialState: Users = adapter.getInitialState();

export const userReducer = createReducer(
    initialState,
    on(Actions.createUser, (state, { user }) => {
        //console.log(props.user)
        return adapter.addOne(user, state);
    }),
    on(Actions.updateUser, (state, { updates }) => {
        console.log(updates, "updates")
        return adapter.updateOne(updates, state);
    }),
    on(Actions.removeUser, (state, { id }) => {
        console.log("Action", id)
        return adapter.removeOne(id, state);
    }),
);


//export const getUsersState = createFeatureSelector<Users>('store');
export const { selectAll, selectEntities } = adapter.getSelectors();



export function reducer(state: Users | undefined, action: Action) {
    return userReducer(state, action);
}