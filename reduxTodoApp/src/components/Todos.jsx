import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const handleEditClick = (id, currentTitle) => {
    setEditingId(id);
    setNewTitle(currentTitle);
  };

  const handleUpdateClick = (id) => {
    dispatch(updateTodo({
      id,
      title: newTitle
    }));
    setEditingId(null); // Clear editing state
    setNewTitle(''); // Clear input
  };

  return (
    <div className='text-white'>
      <div className='font-extrabold text-teal-500'>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input 
                type="text" 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)} 
                className='p-2 text-black bg-blue-500'
              />
              <button 
                onClick={() => handleUpdateClick(todo.id)} 
                className='bg-green-500 p-2'
              >
                Save
              </button>
            </>
          ) : (
            <>
              {todo.title}
              <button 
                onClick={() => handleEditClick(todo.id, todo.title)} 
                className='bg-yellow-500 p-2'
              >
                Edit
              </button>
            </>
          )}
          <button 
            onClick={() => dispatch(deleteTodo(todo.id))} 
            className='bg-red-500 p-2'
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
