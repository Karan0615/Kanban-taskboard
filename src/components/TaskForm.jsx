import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import "../styles/TaskForm.css"

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTask = () => {
    if (!title) return
    const newTask = { id: uuidv4(), title, description }
    setTasks((prev) => ({
      ...prev,
      'to-do': [...prev['to-do'], newTask]
    }))
    setTitle('')
    setDescription('')
  }

  return (
    <div className="task-form">
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={addTask}>+</button>
    </div>
  )
}

export default TaskForm
