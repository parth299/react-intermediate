import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoCreator() {

  const [todo, setTodo] = useState("");

  const {addTodo} = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Somehting is happening though not good enough');
    addTodo(todo);
    setTodo("");
  }

  return (
    <div className='flex justify-center mt-10'>
        <div className='w-5/12'>
           <form action="">
            <input 
                type="text"
                placeholder='Konsa Karam Karna Hai ?' 
                className='p-2 outline-double outline-blue-500 rounded-lg my-5 w-full bg-black text-white' 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={handleSubmit} className='bg-blue-500 px-4 py-2 rounded-xl'>Add</button>
        </form> 
        </div>
        
    </div>
  )
}

export default TodoCreator