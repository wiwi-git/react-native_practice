import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}
//{id: Math.random().toString(), textValue: text, checked: false},

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("addTodo : ", state, action.payload);
            return {
                todos:[...state.todos, action.payload]
            }
        },
        removeTodo: (state, action) => {
        console.log("removeTodo: ", action.payload);
            return {
                todos: state.todos.filter((todo) => {
                    console.log("removeTodo-inner : ", todo.id, todo.id!==action.payload)
                    return todo.id !== action.payload
                })
            }
        },
        toggleCheck: (state, action) => {
            console.log("toggleCheck: ", state, action.payload);
            return {
                todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, checked: !todo.checked} : todo)
            }
        }
    }
})

export const {addTodo, removeTodo, toggleCheck} = todoSlice.actions
export default todoSlice.reducer