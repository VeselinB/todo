import { createAction, props } from '@ngrx/store';
export const createNewTask = createAction('[CreateNewTask] Create New Task', props());
export const updateTask = createAction('[UpdateTask] Update Task', props());
export const deleteTask = createAction('[DeleteTask] Delete Task', props());
export const updateArrays = createAction('[updateArrays] updateArrays', props());
export const getDoneTasks = createAction('[GetTodoTask] Get Todo Task');


