import Head from 'next/head'

import LogoRed from '../assets/logo-red.png'
import MyPicture from '../assets/my-picture.png'
import WaveRed from '../assets/wave-red.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexander Augusto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home-page">
        <section className="home-background">
          <div className="home-header">
            <img src={LogoRed} alt="Logo de Alexander Augusto" />
            <button>
              <i className="fas fa-bars" />
            </button>
          </div>
          <div className="name">
            <h2>ALEXANDER <span>AUGUSTO</span></h2>
          </div>
          <img id="my-picture" src={MyPicture} alt="Foto de Alexander Augusto" />
          <img id="wave-red" src={WaveRed} alt="Design em formato de onda" />
        </section>
      </main>
    </div>
  )
}
