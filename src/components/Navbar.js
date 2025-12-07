// src/components/Navbar.js
import React from 'react'
import './navbar.css'

// src/components/Navbar.js
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <ul className="navbar__menu">
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
