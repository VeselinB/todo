import { createAction, props } from '@ngrx/store';
export const createNewTask = createAction('[CreateNewTask] Create New Task', props<{ data }>());
export const updateTask = createAction('[UpdateTask] Update Task', props<{ data }>());
export const deleteTask = createAction('[DeleteTask] Delete Task', props<{ index, typeOfList }>());
export const updateArrays = createAction('[updateArrays] updateArrays', props<{ todo }>());
export const getDoneTasks = createAction('[GetTodoTask] Get Todo Task');


