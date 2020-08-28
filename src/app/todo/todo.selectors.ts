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

export const selectDoneListForUser = createSelector(
    selectTodo,
    (state: TodoState, props) => state.done.filter(a => a.userId == props.id)
);


export const selectTodoListForUser = createSelector(
    selectTodo,
    (state: TodoState, props) => state.todo.filter(a => a.userId == props.id)
);