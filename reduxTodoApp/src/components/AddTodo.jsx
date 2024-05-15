import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {

    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    
    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo("");
    }

  return (
    <div className='my-10'>
        <form onSubmit={handleAddTodo}>
            <input 
                type="text" 
                value={todo}
                placeholder='Add Todo'
                className='text-black p-2 text-xl rounded-md placeholder:text-zinc-900'
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='bg-zinc-700 p-2 rounded-md mx-4'>Submit</button>
        </form>
    </div>
  )
}

export default AddTodo