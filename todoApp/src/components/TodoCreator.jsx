import React from 'react'

function TodoCreator() {
  return (
    <div className='flex justify-center mt-10'>
        <div className='w-5/12'>
           <form action="">
            <input 
                type="text"
                placeholder='Konsa Karam Karna Hai ?' 
                className='p-2 outline-double outline-blue-500 rounded-lg my-5 w-full bg-black text-white' 
            />
            <button className='bg-blue-500 px-4 py-2 rounded-xl'>Add</button>
        </form> 
        </div>
        
    </div>
  )
}

export default TodoCreator