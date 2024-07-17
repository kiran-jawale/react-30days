import React from 'react'
import TaskItem from './TaskItem'


const TaskList = ({deleteTask, toggle, edit, tasks}) => {

  return (
    <div className='bg-zinc-700 w-96 flex flex-col items-center justify-center'>
        <ul className='list-none'>
            {tasks.map((task) => (<li className='font-semibold' 
                                    key={task.id}>
                                       <TaskItem task={task} deleteTask={deleteTask}
                                       toggle={toggle} edit={edit} />                                       
                                </li>)
                                )}
        </ul>
    </div>
  )
}

export default TaskList