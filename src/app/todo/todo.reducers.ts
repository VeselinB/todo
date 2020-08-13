import { createReducer, on } from "@ngrx/store";
import {
  createNewTask,
  updateTask,
  deleteTask,
  getDoneTasks,
  getTodoTasks,
} from "./todo.actions";

// Винаги си прави интерфейс за стейта
// Това ще е стейт за самия todo модул
export interface Todo {
  title: string;
  description: string;
}

export interface TodoState {
  todo: Todo[];
  done: Todo[];
}

export const initialState: TodoState = {
  todo: [
    { title: "Get to work", description: "Get to work" },
    { title: "Pick up groceries", description: "Pick up groceries" },
    { title: "go home", description: "Get to work" },
    { title: "Fall asleep", description: "Get to work" },
  ],
  done: [
    { title: "Get to work", description: "Get to work" },
    { title: "Pick up groceries", description: "Pick up groceries" },
    { title: "go home", description: "Get to work" },
    { title: "Fall asleep", description: "Get to work" },
  ],
};

const _todoReducer = createReducer(
  initialState,
  on(createNewTask, (state) => state),
  on(updateTask, (state) => state),
  on(deleteTask, (state) => state),
  on(getDoneTasks, (state) => state),
  on(getTodoTasks, (state) => state)
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
