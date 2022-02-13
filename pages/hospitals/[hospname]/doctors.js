import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import  db from '../../../public/firebase-config';
import doctorImg from '../../../public/doctor.svg'
import { useRouter } from 'next/router'
export default function Doctor() {
    const router = useRouter();
    const patId=router.query.hospname;
    const [data,setdata]=useState();
    const strdoctor="/hospitals/"+patId+"/doctors";
    const strhome="/hospitals/"+patId;
    const strPat="/hospitals/"+patId+"/patients";
    const strfaciliy="/hospitals/"+patId+"/facilities";
    const ref=db.ref(`${patId}/DOCTORS`);
    ref.once('value',(sanpshot)=>{
        setdata(sanpshot.val())
    });
    const showdata=()=>{
        let str=[];
        if(data!==undefined){
              for(let key in data){
                    str.push(
                        <div className="card">
                        <div className="d-flex justify-content-between">
                            <div >
                            <div className="d-flex justify-content-between">
                            <Image src={doctorImg} width="200px" height="200px" alt="find nothing"/>
                            <div>
                            <div style={{margin:'10px',marign:'auto',fontSize:'3rem'}}>{key}</div>
                            <div style={{margin:'10px' ,marign:'auto',width:'110px'}}>{data[key]['about']}</div>
                            </div>
                            </div>
                            </div>
                            <div style={{fontSize:'2rem',marginLeft:'40px',marginTop:'40px',fontWeight:'bold'}}>
                                <div>MON-FRI</div>
                                <div>9:00 to 16:00</div>
                                <div>350 INR</div>
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
