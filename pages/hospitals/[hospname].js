import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import HospImg from '../../public/hospImg.svg'
import  db from '../../public/firebase-config';
export default function patientid() {
    const router = useRouter();
    const patId=router.query.hospname;
    const strdoctor="/hospitals/"+patId+"/doctors";
    const strhome="/hospitals/"+patId;
    const strPat="/hospitals/"+patId+"/patients";
    const straddpat="/hospitals/"+patId+"/addpatients";
  return (
    <>
    <header>
    <div class="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href={strhome}><a className="navtag">home</a></Link></li>
            <li><Link href={strdoctor}><a className="navtag">Doctors</a></Link></li>
            <li><Link href={strPat}><a className="navtag">Patients</a></Link></li>
        </ul>
    </nav>
    
    <div class="fas fa-bars"></div>

    </div>
    </header>
        <section className="home" id="home">

      <div className="container">

          <div className="row min-vh-100 align-items-center text-center text-md-left">

              <div className="col-md-6 pr-md-5" data-aos="zoom-in">
                  <Image src={HospImg} width="500%" alt="find nothing"/>
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
                  <h1><span>Welcome</span> to, <span>our</span> Hospital.</h1>
                  <h3>{patId}</h3>
                  <Link href={straddpat}><a ><button className="button">Add Patient</button></a></Link>
              </div>

          </div>

      </div>
      </section>
      </>
  )
}
