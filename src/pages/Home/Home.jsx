import React from 'react'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

import heroImg from '../../assets/saraNeg_ii.svg'
import linkedinIcon from '../../assets/linkedin-pink.svg'
import githubIcon from '../../assets/github-pink.svg'

export default function Home() {
    const iconVariants = {
    initial: { scale: 0.8, opacity: 0, y: -10 },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 20 },
    },
    hover: {
      scale: 1.3,
      rotate: [0, -10, 10, -5, 5, 0],
      textShadow: '0 0 20px rgba(255, 45, 85, 1)',
      transition: { duration: 0.4 },
    },
  }
  return (
    <div className="site-container">
     
      <main className="main-content-home">
        <section className="hero" >
          <img src={heroImg} alt="Illustration of Sara King" className="hero__image" />
        </section>
   <Navbar />
        <nav className="social-links" aria-label="Social Media Links">
          <a href="https://www.linkedin.com/in/sara-king/" target="_blank" rel="noopener noreferrer">
              <motion.strong
              className="navbar__heart navbar__heart--right"
              variants={iconVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            ><img src={linkedinIcon} alt="LinkedIn profile of Sara King" className="social-links__icon" />
         </motion.strong>
          </a>
          <a href="https://github.com/seking31" target="_blank" rel="noopener noreferrer">
             <motion.strong
              className="navbar__heart navbar__heart--right"
              variants={iconVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            > <img src={githubIcon} alt="GitHub profile of Sara King" className="social-links__icon" />
         </motion.strong>
          </a>
        </nav>
      </main>
    
    </div>
  )
}
