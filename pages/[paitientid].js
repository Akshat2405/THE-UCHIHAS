import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import homeImg from '../public/Home-img.svg'
export default function patientid() {
    const router = useRouter();
    const patId=router.query.paitientid;
    console.log()
  return (
    <>
    <header>
    <div class="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
            <li><Link href="/"><a className="navtag">Doctors</a></Link></li>
            <li><Link href="/"><a className="navtag">Patients</a></Link></li>
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
                  <h3>{patId}</h3>
                  <Link href="/hospitals"><a ><button className="button">Hospital</button></a></Link>
              </div>

          </div>

      </div>
      </section>
      </>
  )
}