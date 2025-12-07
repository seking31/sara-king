// src/pages/About.js
import React from 'react'
import '../../index.css'
import './about.css'
import Navbar from '../../components/Navbar'

export default function About() {
  return (
    <div className="site-container">
      <Navbar />
      <main>
        <section>
          <p>In a world of screens and code, Where headphones hum a quiet ode, A coder sits with focused gaze, Crafting dreams in digital ways.</p>

          <p>The laptop glows, a portal bright, To realms where logic takes its flight, A symphony of keys and clicks, Building worlds with clever tricks.</p>

          <p>The singer’s voice, a soulful stream, Inspires the mind, ignites the dream, Blending art with lines of code, Creating magic on the road.</p>

          <p>Together, they weave night and day, In work and song, they find their way, A harmony of tech and art, The beat of life, the coder’s heart.</p>
        </section>
      </main>
    </div>
  )
}
