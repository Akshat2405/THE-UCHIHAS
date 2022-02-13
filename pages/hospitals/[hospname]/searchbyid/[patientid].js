import Link from 'next/link'
import Image from 'next/image'
import loginImg from '../../../../public/Login-img.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'
import db from '../../../../public/firebase-config'
export default function PatientId() {
    const router = useRouter();
    const hospname=router.query.hospname;
    const patId2=router.query.patientid;
    const [data,setdata]=useState();
    const ref=db.ref(`${hospname}/PATIENTS/${patId2}`);
    ref.once('value',(sanpshot)=>{
        setdata(sanpshot.val());
   });
   const showdata=()=>{
    if(data!==undefined){
        //   console.log(data);
          let str=[];
          str.push(<h1 style={{margin:'2px'}}><span>Patient</span> {patId2}</h1>);
          for(let key in data){
              str.push(
              <h3 style={{fontSize:'3rem'}}><b>{key}</b>:{data[key]}</h3>
              )
          }
          return str;
    }

}
  return (
    <>
    <header>
    <div class="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
        </ul>
    </nav>
    
    <div class="fas fa-bars"></div>

    </div>
    </header>
    <section className="login" id="login">

<div className="container">

    <div className="row min-vh-100 align-items-center text-center text-md-left">

        <div className="col-md-6 pr-md-5" data-aos="zoom-in">
            <Image src={loginImg} width="500%" alt="find nothing"/>
        </div>
        <div className="col-md-6 pl-md-5" data-aos="fade-left">
            {showdata()}
        </div>
</div>
</div>

</section>
      </>
  )
}
