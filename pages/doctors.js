import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import homeImg from '../public/Home-img.svg'
import loginImg from '../public/Login-img.svg'
export default function patientid() {
  return (
    <>
    <header>
    <div class="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
            <li><Link href="/doctors"><a className="navtag">Doctors</a></Link></li>
            <li><Link href="/"><a className="navtag">Patients</a></Link></li>
        </ul>
    </nav>
    
    <div class="fas fa-bars"></div>

    </div>
    </header>
    <div style={{width:'100%',marginLeft:'150px',marginTop:'150px'}}>
        <div class="row" style={{width:'80%'}}>
            <div class="card">
            <div class="d-flex justify-content-between">
                <div >
                <div class="d-flex justify-content-between">
                <Image src={loginImg} width="200px" height="200px" alt="find nothing"/>
                <div style={{margin:'10px'}}>VInshu 10</div>
                </div>
                </div>
                <div className=''>
                    <div>VInshu 10</div>
                    <div>VInshu 10</div>
                    <div>VInshu 10</div>
                </div>
            </div>
            </div>

            <div class="card">
            <Image src={loginImg} width="200px" height="200px" alt="find nothing"/>
            <Image src={loginImg} width="200px" height="200px" alt="find nothing"/>

            </div>
            <div class="card">
            <Image src={loginImg} width="200px" height="200px" alt="find nothing"/>
            </div>

        </div>
      </div>
      </>
  )
}
