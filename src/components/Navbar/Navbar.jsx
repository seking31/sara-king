import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './navbar.css'
import linkedinIcon from '../../assets/linkedin-pink.svg'
import githubIcon from '../../assets/github-pink.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const heart = '<3'

  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const firstMenuLinkRef = useRef(null)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    if (toggleRef.current) {
      toggleRef.current.focus()
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isOpen) return

      const menuEl = menuRef.current
      const toggleEl = toggleRef.current

      if (
        (menuEl && menuEl.contains(event.target)) ||
        (toggleEl && toggleEl.contains(event.target))
      ) {
        return
      }

      setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen])

  // Focus first menu item when opened
  useEffect(() => {
    if (isOpen && firstMenuLinkRef.current) {
      firstMenuLinkRef.current.focus()
    }
  }, [isOpen])

  // Close on Escape and restore focus
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        if (toggleRef.current) {
          toggleRef.current.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const heartVariants = {
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

  const brandClusterVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  return (
    <header className="nav-header">
      <nav className="navbar" aria-label="Primary navigation">
        <motion.div
          className="navbar__brand-cluster"
          variants={brandClusterVariants}
          initial="initial"
          animate="animate"
        >
          <Link to="/" className="navbar__brand">
            <span className="visually-hidden">Home</span>
            <motion.strong
              className="navbar__heart navbar__heart--right"
              variants={heartVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
              aria-hidden="true"
            >
              {heart}
            </motion.strong>
          </Link>
        </motion.div>

        <div className="social-links" aria-label="Social media links">
          <a
            href="https://www.linkedin.com/in/sara-king/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.strong
              className="navbar__heart navbar__heart--right"
              variants={heartVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn profile of Sara King"
                className="social-links__icon"
              />
            </motion.strong>
          </a>
          <a
            href="https://github.com/seking31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.strong
              className="navbar__heart navbar__heart--right"
              variants={heartVariants}
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={githubIcon}
                alt="GitHub profile of Sara King"
                className="social-links__icon"
              />
            </motion.strong>
          </a>
        </div>

        {/* Hamburger Button (mobile only via CSS) */}
        <button
          className="navbar__toggle"
          aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation-menu"
          onClick={handleToggle}
          ref={toggleRef}
        >
          <span className="hamburger" />
          <span className="hamburger" />
          <span className="hamburger" />
        </button>

     

        <ul
          id="primary-navigation-menu"
          className={`navbar__menu ${isOpen ? 'open' : ''}`}
          ref={menuRef}
        >
          <li className="navbar__item">
            <Link
              to="/"
              className="navbar__link"
              onClick={handleLinkClick}
              ref={firstMenuLinkRef}
            >
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/resume" className="navbar__link" onClick={handleLinkClick}>
              Resume
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/projects"
              className="navbar__link"
              onClick={handleLinkClick}
            >
              GitHub Projects
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/live"
              className="navbar__link"
              onClick={handleLinkClick}
            >
             Live Projects
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/contact"
              className="navbar__link"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li>
         <button
          className="navbar__toggle_close"
          aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation-menu"
          onClick={handleToggle}
          ref={toggleRef}>X</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
