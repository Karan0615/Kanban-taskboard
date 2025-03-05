import Navbar, { initialTasks } from './components/Navbar.jsx'
import TaskColumn from './components/TaskColumn.jsx'
import "./styles/App.css"
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  const onDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination } = result
    const sourceTasks = Array.from(tasks[source.droppableId])
    const [movedTask] = sourceTasks.splice(source.index, 1)

    const destTasks = Array.from(tasks[destination.droppableId])
    destTasks.splice(destination.index, 0, movedTask)

    setTasks({
      ...tasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destTasks
    })
  }

  return (
    <>
      <Navbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board">
          {Object.keys(tasks).map((col) => (
            <TaskColumn key={col} title={col} tasks={tasks[col]} setTasks={setTasks} />
          ))}
        </div>
      </DragDropContext>
    </>
  )
}

export default App
