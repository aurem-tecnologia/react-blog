import React from 'react'

import logoRed from '../assets/img/logo-red.png'
import myPicture from '../assets/img/my-picture.png'
import waveRed from '../assets/img/wave-red.svg'

import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <section className="home-background">
        <div className="home-header">
          <img src={logoRed} alt="Logo de Alexander Augusto" />
          <button>
            <i className="fas fa-bars" />
          </button>
        </div>
        <div className="name">
          <h2>ALEXANDER <span>AUGUSTO</span></h2>
        </div>
        <img id="my-picture" src={myPicture} alt="Foto de Alexander Augusto" />
        <img id="wave-red" src={waveRed} alt="Design em formato de onda" />
      </section>
    </div>
  )
}

export default Home