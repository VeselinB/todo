import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from '../users/user.reducer';

export const createUser = createAction('[Users] Create User', props<{ user: User }>());
export const updateUser = createAction('[Users] Update User', props<{ user: Update<User> }>());

//export const loadUsers = createAction('[User/API] Load Users', props<{ users: User[] }>());