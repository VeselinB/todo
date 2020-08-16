import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducers';

export const selectTodo = (state: AppState) => state.todo;

export const selectTodoList = createSelector(
    selectTodo,
    (state: TodoState) => state.todo
);

export const selectDoneList = createSelector(
    selectTodo,
    (state: TodoState) => state.done
);