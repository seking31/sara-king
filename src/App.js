import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'
import GitHubProjects from './pages/GitHubProjects/GitHubProjects'

export default function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<GitHubProjects />} />
      </Routes>
    </main>
  )
}
