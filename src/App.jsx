import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
