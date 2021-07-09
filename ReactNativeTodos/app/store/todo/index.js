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
            console.log("addTodo : ", state, payload);
            return {
                todos:[
                    ...state,
                    todo
                ]
            }
        },
        removeTodo: (state, {payload:targetId}) => {
        console.log("removeTodo: ", state, payload);
            return {
                todos:[
                    state.todos.filter(id => id !== targetId)
                ]
            }
        },
        toggleCheck: (state, {payload:targetId}) => {
            console.log("toggleCheck: ", state, payload);
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