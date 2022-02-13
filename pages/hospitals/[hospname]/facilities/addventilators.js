import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import  db from '../../../../public/firebase-config';
import doctorImg from '../../../../public/doctor.svg'
import { useRouter } from 'next/router'
export default function vanti() {
    const router = useRouter();
    const patId=router.query.hospname;
    const [data,setdata]=useState();
    const strdoctor="/hospitals/"+patId+"/doctors";
    const strhome="/hospitals/"+patId;
    const strPat="/hospitals/"+patId+"/patients";
    const strfaciliy="/hospitals/"+patId+"/facilities";
    const ref=db.ref(`/`);
    ref.once('value',(sanpshot)=>{
        setdata(sanpshot.val())
    });
    let venti='VENTILATORS';
    let avail='available';
    const showdata=()=>{
        let str=[];
        if(data!==undefined){
              for(let key in data){
                  if(key===patId) continue;
                  let arr=[];
                  let ck=true;
                  for(let key2 in data[key][venti]){
                      arr.push(<div style={{fontSize:'2rem'}}>{key2}:{data[key][venti][key2]}</div>)
                      if(data[key][venti][key2]===0) ck=false;
                  }
                  if(ck===false) continue;
                    str.push(
                        <div className="card">
                        <div className="d-flex justify-content-between">
                            <div >
                            <div className="d-flex justify-content-between">
                            <Image src={doctorImg} width="200px" height="200px" alt="find nothing"/>
                            <div style={{margin:'10px',fontSize:'2.5rem'}}>{key}</div>
                            </div>
                            </div>
                            <div style={{marginTop:'40px',marginRight:'40px'}}>
                                {arr}
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
