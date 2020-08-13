import { createAction } from '@ngrx/store';
export const createNewTask = createAction('[CreateNewTask] Create New Task');
export const updateTask = createAction('[UpdateTask] Update Task');
export const deleteTask = createAction('[DeleteTask] Delete Task');
export const getTodoTasks = createAction('[GetTodoTask] Get Todo Task');
export const getDoneTasks = createAction('[GetTodoTask] Get Todo Task');


