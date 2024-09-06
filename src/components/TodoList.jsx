import React, { useRef, useState } from 'react'
const TodoList = () => {
  const [todos, setTodos] = useState(['Create todo app', 'Add todo']);
  const inputRef = useRef(null);

  const handleClick = () => {
    const tasks = inputRef.current.value;
    if (tasks) {
      setTodos([...todos, tasks]) ;
      inputRef.current.value = ''
    }
  }

  const handleDelete = (index) => {
    const newTask = todos.filter((_, i)  => i !== index   ) 
      setTodos(newTask)
    }

  return (
    <div className='bg-yellow-300 pt-3 px-4 w-[19rem] mx-auto rounded-2xl drop-shadow'>
      <h1 className='text-center font-bold text-2xl mb-4'>Todo App</h1>
      <div className='flex flex-col'>
        <input type="text"
        placeholder='Add new task'
        ref={inputRef}
        className='px-3 py-2 bg-yellow-50 rounded focus:focus:outline-none'
        />
          <button className='bg-gray-800 py-2 px-3 rounded text-white my-4'  onClick={handleClick}>Add Task</button>
      </div>
       <ul className='py-4 mb-4 flex flex-col items-center'>
       {todos.map((todo, index) =>  (
          <li key={index} className=' bg-yellow-200 w-60 rounded-xl px-4 py-3 flex justify-between items-center mb-3'>{todo}
            <div>
              <div className='flex flex-col'>
              <input 
                type='checkbox'
                className='text-center'
              />
              <button className='text-red-700' onClick={() => handleDelete(index)}>x</button>
              </div>
            </div>
         </li>
       ))}
       </ul>
    </div>
  )
}

export default TodoList