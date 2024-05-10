import React, { useState } from 'react'

function Todos() {

  const [todo, setTodo] = useState("Ye krle Jaldi");
  const [toggle, setToggle] = useState(true);
  const [isEdit, setEdit] = useState(false);

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
        <button className='delete bg-red-500 p-2 px-3 rounded-r-lg'>Delete</button>
    </div>
  )
}

export default Todos