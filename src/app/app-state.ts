import * as  fromTodo from './todo/todo.reducers';


// Тук описваме как изглежда целия стейт
export interface AppState {
    todos: fromTodo.TodoState
}