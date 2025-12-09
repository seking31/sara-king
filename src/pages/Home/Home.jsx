import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import BounceSquare from '../../components/BounceSquare/BounceSquare'
import './home.css'
import heroImg from '../../assets/saraNeg_ii.svg'


export default function Home() {

  return (
    <div className="site-container">
     
      <main className="main-content-home">
        <section className="hero" >
          <img src={heroImg} alt="Illustration of Sara King" className="hero__image" />
        </section>
        <Navbar />
      <BounceSquare />
      </main>
    </div>
  )
}
