import React, { useEffect, useState } from "react";

const TaskItem = ({ deleteTask, edit, toggle, task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  useEffect(() => {
    setNewTask(task)
  },[task])

  function handleSave() {
    setIsEditing(false);
    edit(newTask); // Call the edit function to update the task
  }

  function handleEdit() {
    setIsEditing(true);
  }

  const toggleSwitch = () =>{
    toggle(newTask.id)
  }

  return (
    <div className="m-4">
      {!isEditing ? (
        <label className={`${newTask.isCompleted === true ? 'text-gray-900' : 'text-white'}`}>{newTask.title}</label>
      ) : (
        <input
          type="text"
          className="text-black"
          onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))}
          value={newTask.title}
        ></input>
      )}
      <button
        className="bg-green-600 m-2 text-white border-2 rounded-lg"
        onClick={() => deleteTask(newTask.id)}
        disabled={isEditing}
      >
        DELETE
      </button>
      <button
        className="bg-green-600 m-2 text-white border-2 rounded-lg"
        onClick={toggleSwitch}
        disabled={isEditing}
      >
        Toggle
      </button>
      <button
        className="bg-green-600 m-2 text-white border-2 rounded-lg"
        onClick={isEditing ? handleSave : handleEdit}
      >
        {isEditing ? "SAVE" : "EDIT"}
      </button>
    </div>
  );
};

export default TaskItem;
