import { createReducer, on, props } from '@ngrx/store';
import { createNewTask, updateTask, deleteTask, getDoneTasks, updateArrays } from './todo.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export interface Todo {
    title: string;
    description: string;
    userId?: string;
    name?: string;
}

export interface TodoState {
    todo: Todo[];
    done: Todo[];
}

export const initialState = {
    todo: [
        { title: 'Get to work', description: 'Get to work' },
        { title: 'Pick up groceries', description: 'Pick up groceries' },
        { title: 'go home', description: 'Get to work' },
        { title: 'Fall asleep', description: 'Get to work' },


    ], done: [
        { title: 'Get to work', description: 'Get to work' },
        { title: 'Pick up groceries', description: 'Pick up groceries' },
        { title: 'go home', description: 'Get to work' },
        { title: 'Fall asleep', description: 'Get to work' },

    ]
}


const _todoReducer = createReducer(initialState,
    on(createNewTask, (state, props) => {
        let data = (props.data)

        let result = state.todo.map(a => a);
        result.unshift(data);
        console.log(result)
        let finalResult = { todo: result }
        return {
            ...state,
            ...finalResult
        }
    }

    ),
    on(updateTask, (state, props) => {
        console.log(props.data, "typeData")
        let typeOfList = props.data.typeOfList
        let index = props.data.index
        //console.log(typeOfList, "typeOfList", index, "index")
        let result = state[typeOfList].slice(0);
        result[index] = { title: props.data.title, description: props.data.description, userId: props.data.userId, user: props.data.user }
        console.log(result)
        if (typeOfList == "todo") {
            result = { todo: result }
        } else {
            result = { done: result }
        }
        //let newResult={todo: result}
        return {
            ...state,
            ...result

        }
    }
    ),
    on(deleteTask, (state, props) => {
        // console.log(props["todo"])
        // const result = props["todo"]

        let result = state[props.typeOfList].slice(0);
        result.splice(props.index, 1);
        if (props.typeOfList == "done") {
            result = { done: result }
        } else {
            result = { todo: result }
        }
        return {
            ...state,
            ...result
        }
    }),
    on(updateArrays, (state, props) => {
        let result = props.todo
        //console.log("result:" + result)
        return {
            ...state,
            ...result
        }
    }
    ),



);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}