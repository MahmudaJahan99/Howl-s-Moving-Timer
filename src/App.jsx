import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TaskSelect from './pages/TaskSelect'
import TimerPage from './pages/TimerPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
        <Routes>
          {/* Home page - shows all tasks */}
          <Route path="/" element={<Home />} />

          {/* Task select page - shows subtasks for selected task */}
          <Route path="/task/:taskId" element={<TaskSelect />} />

          {/* Timer page - shows timer modal */}
          <Route path="/timer/:taskId/:subtaskId" element={<TimerPage />} />

          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
