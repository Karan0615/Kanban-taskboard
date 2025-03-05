import { Draggable } from 'react-beautiful-dnd'
import "../styles/TaskCard.css"

function TaskCard({ task, index, deleteTask }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div className="task-card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </Draggable>
  )
}

export default TaskCard
