import React from 'react'
import '../../index.css'
import Navbar from '../../components/Navbar'

import heroImg from '../../assets/saraNeg_ii.svg'
import linkedinIcon from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import heroBg from '../../assets/perfect.gif'

export default function Home() {
  return (
    <div className="site-container">
      <Navbar />
      <main className="main-content-home">
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
          <img src={heroImg} alt="Illustration of Sara King" className="hero__image" />
        </section>

        <nav className="social-links" aria-label="Social Media Links">
          <a href="https://www.linkedin.com/in/sara-king/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn profile of Sara King" className="social-links__icon" />
          </a>
          <a href="https://github.com/seking31" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub profile of Sara King" className="social-links__icon" />
          </a>
        </nav>
      </main>
    </div>
  )
}
