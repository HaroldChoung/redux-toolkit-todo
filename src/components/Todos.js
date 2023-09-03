import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo,editTodo } from '../features/todos/todoSlice'

export default function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(state=>state.todos)
    console.log(todos)
    const [currentTodoID, setCurrentTodoID] = useState(null)
    const [currentTodoText, setCurrentTodoText] = useState(null)
    const handleEdit = (id,text) =>{
        setCurrentTodoID(id)
        setCurrentTodoText(text)
    }
    const changeText = (id,text) =>{
        dispatch(editTodo({id,text}))
        setCurrentTodoID(null)
        setCurrentTodoText(null)
    }
  return (
    <>
        <div className='mt-5 text-white text-xl'>Todos list</div>
        <ul className='list-none'>
        {todos.map(todo=>{
            return <li className='mt-4 flex justify-between items-center bg-zinc-800py-2 rounded bg-slate-400 px-4 py-2 m-4' key={todo.id}>
                {currentTodoID===todo.id?<input type="text" value={currentTodoText} onChange={(e)=>setCurrentTodoText(e.target.value)}/>:<div>{todo.text}</div>}
                
                <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-00 rounded text-md' onClick={()=>currentTodoID===null?handleEdit(todo.id,todo.text):changeText(currentTodoID,currentTodoText)}>
                    {currentTodoID===todo.id?'Edit':'update'}
                </button>
                <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-00 rounded text-md' onClick={()=>dispatch(removeTodo(todo.id,todo.text))}>
                    Delete
                </button>
            </li>
            
        })}
        </ul>
    </>
  )

}
