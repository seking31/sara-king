// src/components/Navbar.js
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        {/* Hamburger Button */}
        <button className="navbar__toggle" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <ul className={`navbar__menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/resume" className="navbar__link">
              Resume
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/projects" className="navbar__link">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
