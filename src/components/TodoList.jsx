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
    <div className='bg-yellow-300 py-3 px-4 w-1/2 mx-auto rounded-2xl drop-shadow'>
      <h1 className='text-center font-bold text-2xl mb-4'>Todo App</h1>
      <input type="text"
      placeholder='Add new task'
      ref={inputRef}
      className='px-3 py-1 bg-yellow-50 rounded-l-md'
       />
        <button className='bg-gray-800 py-1 px-3 rounded-r text-gray-100 md:bg-white '  onClick={handleClick}>Add Task</button>
       <ul className='py-4 mb-4'>
       {todos.map((todo, index) =>  (
          <li key={index} className=' bg-yellow-200 rounded-xl w-48 py-1 px-4 flex justify-between items-center mb-3'>{todo}
            <div>
              <input 
                type='checkbox'
              />
              <button className='text-red-700 text-lg ml-2 ' onClick={() => handleDelete(index)}>x</button>
            </div>
         </li>
       ))}
       </ul>
    </div>
  )
}

export default TodoList