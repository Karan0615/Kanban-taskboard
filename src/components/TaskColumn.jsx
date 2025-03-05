import { Droppable } from 'react-beautiful-dnd'
import TaskCard from './TaskCard.jsx'
import TaskForm from './TaskForm.jsx'
import "../styles/TaskColumn.css"

function TaskColumn({ title, tasks, setTasks }) {
  return (
    <div className="column">
      <h2>{title.replace('-', ' ')}</h2>
      {title === 'to-do' && <TaskForm setTasks={setTasks} />}
      <Droppable droppableId={title}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="task-list">
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                deleteTask={(id) => {
                  setTasks((prev) => ({
                    ...prev,
                    [title]: prev[title].filter((t) => t.id !== id)
                  }))
                }}
              />
            ))}
            {provided.placeholder} 
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TaskColumn
