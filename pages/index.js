import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import homeImg from '../public/Home-img.svg'
import { useState } from 'react'
export default function Home() {
  return (
    <>
    <header>
    <div class="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
            <li><Link href="/login"><a className="navtag">Sign in</a></Link></li>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
        </ul>
    </nav>
    
    <div class="fas fa-bars"></div>

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
                  <a href="#"><button className="button">learn more</button></a>
              </div>

          </div>

      </div>

      </section>
      </>
  )
}
