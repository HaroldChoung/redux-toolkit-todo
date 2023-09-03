/* eslint-disable no-unused-expressions */
import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[{id:1,text:'hello'}]
}

export const todoSlide = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo:(state,action)=>{
            return {...state,
                todos: state.todos.map(todo=>{
                    return todo.id===action.payload.id? {...todo,text:action.payload.text}:todo
                })
            }
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlide.actions
export default todoSlide.reducer
