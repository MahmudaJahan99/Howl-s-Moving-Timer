import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
   <Router>
      <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
        <Routes>
          <Route path="/" element={<div className="flex items-center justify-center min-h-screen"><h1>Welcome to Howl's Moving Timer</h1></div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
