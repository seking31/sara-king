import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const heart = '<3'
  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleLinkClick = () => {
    // Close the menu after clicking a link on mobile
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        {/* Brand (optional, remove if not needed) */}
        <Link to="/" className="navbar__brand">
          <strong>{heart}</strong>
        </Link>

        {/* Hamburger Button (mobile only via CSS) */}
        <button className="navbar__toggle" aria-label="Toggle menu" aria-expanded={isOpen} onClick={handleToggle}>
          <span className="hamburger" />
          <span className="hamburger" />
          <span className="hamburger" />
        </button>

        <ul className={`navbar__menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar__item">
            <Link to="/" className="navbar__link" onClick={handleLinkClick}>
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
            <Link to="/projects" className="navbar__link" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
