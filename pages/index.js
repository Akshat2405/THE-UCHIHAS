import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import homeImg from '../public/Home-img.svg'
import { useState } from 'react'
export default function Home() {
  return (
    <>
    <header>
    <div className="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
        </ul>
    </nav>
    
    <div className="fas fa-bars"></div>

    </div>
    </header>
        <section className="home" id="home">

      <div className="container">

          <div className="row min-vh-100 align-items-center text-center text-md-left">

              <div className="col-md-6 pr-md-5" data-aos="zoom-in">
                  <Image src={homeImg} width="500%" alt="find nothing"/>
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                  <h1><span>stay</span> safe, <span>stay</span> healthy.</h1>
                  <h3>caring for you.</h3>
                  <Link href="/hospitals"><a ><button className="button">Hospital</button></a></Link>
              </div>

          </div>

      </div>
      </section>
      </>
  )
}
