import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import  db from '../../../public/firebase-config';
import doctorImg from '../../../public/doctor.svg'
import { useRouter } from 'next/router'
export default function Facility() {
    const router = useRouter();
    const patId=router.query.hospname;
    const [data,setdata]=useState();
    const strdoctor="/hospitals/"+patId+"/doctors";
    const strhome="/hospitals/"+patId;
    const strPat="/hospitals/"+patId+"/patients";
    const strfaciliy="/hospitals/"+patId+"/facilities";
    const stradd="/hospitals/"+patId+"/facilities/addventilators";
    const ref=db.ref(`${patId}`);
    ref.once('value',(snapshot)=>{
        setdata(snapshot.val())
    });
    const showdata=()=>{
        let str=[];
        if(data!==undefined){
              for(let key in data){
                  if(key==='DOCTORS' || key==='PATIENTS') continue;
                  let arr=[];
                  for(let key2 in data[key]){
                      arr.push(
                        <div style={{fontSize:'2rem'}}>{key2}:{data[key][key2]}</div>
                      )
                  }
                    str.push(
                        <div className="card">
                        <div className="d-flex justify-content-between">
                            <div >
                            <div className="d-flex justify-content-between">
                            <Image src={doctorImg} width="200px" height="200px" alt="find nothing"/>
                            <div style={{margin:'10px'}}>{key}</div>
                            </div>
                            </div>
                            <div style={{marginTop:'40px',marginRight:'40px'}}>
                                {arr}
                                <Link href={stradd}><a><button className="button" style={{width:'20rem'}}>Request {key}</button></a></Link>
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
    <div className="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href={strhome}><a className="navtag">home</a></Link></li>
            <li><Link href={strdoctor}><a className="navtag">Doctors</a></Link></li>
            <li><Link href={strPat}><a className="navtag">Patients</a></Link></li>
            <li><Link href={strfaciliy}><a className="navtag">Facility</a></Link></li>
        </ul>
    </nav>
    
    <div className="fas fa-bars"></div>

    </div>
    </header>
    <div style={{width:'100%',marginLeft:'150px',marginTop:'150px'}}>
        <div className="row" style={{width:'80%'}}>
            {showdata()}
        </div>
      </div>
      </>
  )
}
