import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import  db from '../../../public/firebase-config';
import patientImg from '../../../public/patient.svg'
import { useRouter } from 'next/router'
export default function patient() {
    const router = useRouter();
    const patId=router.query.hospname;
    const [data,setdata]=useState();
    const strdoctor="/hospitals/"+patId+"/doctors";
    const strhome="/hospitals/"+patId;
    const strPat="/hospitals/"+patId+"/patients";
    const strfaciliy="/hospitals/"+patId+"/facilities";
    const ref=db.ref(`${patId}/PATIENTS`);
    ref.once('value',(sanpshot)=>{
        setdata(sanpshot.val())
    });
    const showdata=()=>{
        let str=[];
        if(data!==undefined){
              for(let key in data){
                    str.push(
                        <div class="card">
                        <div class="d-flex justify-content-between">
                            <div >
                            <div class="d-flex justify-content-between">
                            <Image src={patientImg} width="200px" height="200px" alt="find nothing"/>
                            </div>
                            </div>
                            <div style={{marginTop:'20px',fontSize:'1.2rem'}}>
                                <div>Id:{key}</div>
                                <div>Name:{data[key]['name']}</div>
                                <div>Age:{data[key]['age']}</div>
                                <div>Disease:{data[key]['disease']}</div>
                                <div>Decription:{data[key]['treatment description']}</div>
                            </div>
                        </div>
                        </div>
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
            <li><Link href={strhome}><a className="navtag">home</a></Link></li>
            <li><Link href={strdoctor}><a className="navtag">Doctors</a></Link></li>
            <li><Link href={strPat}><a className="navtag">Patients</a></Link></li>
            <li><Link href={strfaciliy}><a className="navtag">Facility</a></Link></li>
        </ul>
    </nav>
    
    <div class="fas fa-bars"></div>

    </div>
    </header>
    <div style={{width:'100%',marginLeft:'150px',marginTop:'150px'}}>
        <div class="row" style={{width:'80%'}}>
            {showdata()}
        </div>
      </div>
      </>
  )
}
