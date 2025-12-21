import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'
import GitHubProjects from './pages/GitHubProjects/GitHubProjects'
import MouseParticles from './template/MouseParticles'
import BounceSquare from './components/BounceSquare/BounceSquare'
import LiveProjects from './pages/LiveProjects/LiveProjects'

export default function App() {
  return (
    <>
    
    <MouseParticles />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<GitHubProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bounce" element={<BounceSquare />} />
        <Route path="/live" element={<LiveProjects />} />
      </Routes>
    </main>
    </>
  )
}
