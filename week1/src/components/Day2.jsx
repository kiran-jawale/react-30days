import React, { useState } from 'react';

export default function Day2 () {
    const [todos, setTodos] = useState([
        {id:Math.random(), title: 'Task 1'},
        {id:Math.random(), title: 'Task 2'},
        {id:Math.random(), title: 'Task 3'},
        {id:Math.random(), title: 'Task 4'},
        {id:Math.random(), title: 'Task 5'}
    ])

    const handleDelete = (id) => {
        setTodos( (prev) => todos.filter( (todo) => todo.id !== id ) )
    }

    return (
        <div className="bg-zinc-800 text-white w-screen h-screen font-sans font-semibold">
           <ul>
            {todos.map( (todo) => (
                <li key={todo.id}>{todo.title} <button className='text-white' onClick={ () => handleDelete(todo.id)}>DELETE</button> </li>
            ) )}
            </ul>
        </div>
    )
}

