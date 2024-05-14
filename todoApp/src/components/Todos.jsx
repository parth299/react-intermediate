import React, { useState, useEffect } from 'react'
import { useTodo } from '../context';

function Todos({name}) {

  const [todo, setTodo] = useState("");
  const [toggle, setToggle] = useState(true);
  const [isEdit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const {deleteTodo} = useTodo();
  const handleDelete = (e) => {
    e.preventDefault();
  }
  
  useEffect(() => {
    setTodo(name);
  }, [name])
  

  return (
    <div className='mt-5 flex justify-center'>
        <input 
            type="text" 
            value={todo}
            disabled={toggle}
            className='p-3 w-6/12 rounded-l-lg text-blue-500 font-bold placeholder:text-white'
            onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={(e) => {
            setEdit(prev => !prev)
            setToggle(prev => !prev)
          }}  className='edit bg-green-400 p-2 px-3'>{isEdit ? "DoneEditing?" : "Edit"}</button>
        <button onClick={handleDelete} className='delete bg-red-500 p-2 px-3 rounded-r-lg'>Delete</button>
    </div>
  )
}

export default Todos