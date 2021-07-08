import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id:'',
            textValue:'',
            checked:false
        }
    ]
}
//{id: Math.random().toString(), textValue: text, checked: false},

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, {payload:{todo}}) => {
            return {
                todos:[
                    ...state.todos,
                    todo
                ]
            }
        },
        removeTodo: (state, {payload:{targetId}}) => {
            return {
                todos:[
                    state.todos.filter(id => id !== targetId)
                ]
            }
        },
        toggleCheck: (state, {payload:{targetId}}) => {
            return {
                todos:[
                    state.todos.map(todo => todo.id === targetId ? { ...todo, checked: !todo.checked} : todo)
                ]
            }
        }
    }
})

export const {addTodo, removeTodo, toggleCheck} = todoSlice.actions
export default todoSlice.reducer