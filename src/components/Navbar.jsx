import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav>
      <h1>Kanban Taskboard</h1>
    </nav>
  )
}

export default Navbar
export const initialTasks = {
  'to-do': [],
  'in-process': [],
  'done': []
}
