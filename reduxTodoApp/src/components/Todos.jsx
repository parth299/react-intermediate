import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

function Todos() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

  return (
    <div className='text-white'>
        <div className='font-extrabold text-teal-500'>Todos</div>
        {todos.map((todo) => (
            <div key={todo.id}>
                {todo.title}
                <button onClick={() => dispatch(deleteTodo(todo.id))} className='bg-red-500 p-2'>X</button>
            </div>
        ))}
    </div>
  )
}

export default Todos