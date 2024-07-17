import React, { useRef, useState } from 'react'

const TaskForm = (props) => {
  const [newTask, setNewTask] = useState('')

  function handleSubmit(e) {
    if(newTask !== '') {
    e.preventDefault();
    props.add({id: Math.random(), title: newTask, isCompleted: false})
    setNewTask('')}
    inputRef.current.focus()
  }

  const inputRef =useRef(null)

  return (
    <div className='bg-zinc-700 w-96 m-2 flex gap-2'>
        <form onSubmit={handleSubmit}>
          <input className='text-black' ref={inputRef} type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} />
        </form>
        <button onClick={handleSubmit} type='submit'>ADD</button>
    </div>
  )
}

export default TaskForm