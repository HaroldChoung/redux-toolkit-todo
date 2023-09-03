import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'

function AddTodo() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
        <form onSubmit={addTodoHandler}>
            <div className='text-center text-white font-bold'>Add Todo</div>
            <input type="text" className='bg-white  px-4 py-2 mx-2 rounded-md' value={input} onChange={(e) => { setInput(e.target.value) } } />
            <button type="submit" onClick={addTodoHandler} className='bg-blue-800 text-xl rounded-md px-4 py-2 text-white'>Add Button</button>
        </form>
    </>
  )
}
export default AddTodo