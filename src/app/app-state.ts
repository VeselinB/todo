import * as  fromTodo from './todo/todo.reducers';
import * as fromUsers from './users/users/user.reducer'

// Тук описваме как изглежда целия стейт
export interface AppState {
    todo: fromTodo.TodoState
    users: fromUsers.Users
}