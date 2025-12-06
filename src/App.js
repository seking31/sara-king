import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'

export default function App() {
  return (
    <Router>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </Router>
  )
}
