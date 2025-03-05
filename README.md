Kanban Taskboard

OVERVIEW
This project is a Kanban Taskboard built with Vite + React that helps users manage tasks using a drag-and-drop interface. The board consists of three columns:
To-Do: Tasks that need to be completed.
In-Process: Tasks currently in progress.
Done: Completed tasks.

FEATURES

Add new tasks with title and description.
Drag and drop tasks between columns.
Delete tasks with a red button at the bottom-right corner of each task card.
Modern minimalist user interface.

TECH STACK
React.js
Vite
React Beautiful DnD
UUID for unique task IDs

HOW TO RUN PROJECT LOCALLY

Prerequisites
Make sure you have the following installed:
1)Node.js
2)npm

STEPS

1)Clone the Repository:
git clone https://github.com/karan0615/kanban-taskboard.git

2)Navigate to the Project Folder:

cd kanban-taskboard

3)Install Dependencies:

npm install

4)Run the Development Server:

npm run dev

Open the App in Your Browser:

http://localhost:5173/

Folder Structure

📁 kanban-taskboard
│
├─ public/               # HTML Files
├─ src/                  # React Components and CSS
│   ├─ components/       # Navbar, TaskCard, TaskColumn, TaskForm
│   ├─ styles/           # CSS Files
│   ├─ App.jsx           # Main App Component
│   └─ main.jsx          # App Entry Point
└─ package.json          # Dependencies
