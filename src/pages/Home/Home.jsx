import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BounceSquare from '../../components/BounceSquare/BounceSquare'
import './home.css'
import heroImg from '../../assets/saraNeg_ii.svg'

export default function Home() {
  return (
    <div className="site-container">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="main-content-home"
        aria-labelledby="home-hero-heading"
      >
        <section className="hero">
          <div className="hero__content">
            <img
              src={heroImg}
              alt="Illustration of Sara King"
              className="hero__image"
            />
            <h1 id="home-hero-heading" className="hero__title">
              Sara E. King – Full Stack Developer
            </h1>
            <p className="hero__subtitle">
              Building accessible, thoughtful web experiences.
            </p>
          </div>
        </section>

        <BounceSquare />
      </main>
    </div>
  )
}
