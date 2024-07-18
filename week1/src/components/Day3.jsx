
//state, props, CRUD , updating state, rerendering components, prev state, 

import React,{useState} from 'react';
import TaskForm from './children/TaskForm'
import TaskList from './children/TaskList'

export default function Day3() {

    const [tasks, setTasks] = useState([
        { id:Math.random(), title:'task 1', isCompleted:false },
        { id:Math.random(), title:'task 2', isCompleted:false },
        { id:Math.random(), title:'task 3', isCompleted:false },
        { id:Math.random(), title:'task 4', isCompleted:false },
        { id:Math.random(), title:'task 5', isCompleted:false }
    ])

    function addTask(data) {
        setTasks((prev) => [...prev, data]);
    }

    function deleteTask(id) {
        setTasks((prev) => (prev.filter( (task) => task.id !== id )))
    }

    function updateTask(newTask) {
        setTasks( (prev) => (prev.map( (task) => ((task.id === newTask.id) ? newTask : task) )) )
    }

    function toggleTask(id) {
        setTasks( (prev) => prev.map( (prevTask) => prevTask.id === id ? 
        {...prevTask, isCompleted: !prevTask.isCompleted} : prevTask ) )
    }

    return (
        <div className='bg-zinc-800 text-white h-screen w-full flex flex-col items-center justify-center'>
        <TaskForm add={addTask} />
        <TaskList deleteTask={deleteTask} toggle={toggleTask} edit={updateTask} tasks={tasks} />
        </div>
    )

}