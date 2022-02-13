import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import  db from '../../../public/firebase-config';
import doctorImg from '../../../public/doctor.svg'
import { useRouter } from 'next/router'
import patImg from '../../../public/hospImg.svg'
export default function Addpat() {
    const router = useRouter();
    const patId=router.query.hospname;
    const [data,setdata]=useState();
    const strdoctor="/hospitals/"+patId+"/doctors";
    const strhome="/hospitals/"+patId;
    const strPat="/hospitals/"+patId+"/patients";
    const strfaciliy="/hospitals/"+patId+"/facilities";
    const ref=db.ref(`${patId}/PATIENTS`);
    const [id,setId]=useState('');
    const[name,setname]=useState('');
    const[age,setage]=useState('');
    const [disease,setdisease]=useState('');
    const[description,setdiscription]=useState('')
    const [number,setnumber]=useState('');
    const submitform=(e)=>{
        e.preventDefault();
        const obj={
            'name':name,
            'age':age,
            'disease':disease,
            'number':number,
            'treatment description':description
        }
        console.log(obj);
        ref.update({[id]:obj});
        setId('');
        setname('');
        setdisease('');
        setdiscription('');
        setnumber('');
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
        <section className="home" id="home">

      <div className="container">

          <div className="row min-vh-100 align-items-center text-center text-md-left">

              <div className="col-md-6 pr-md-5" data-aos="zoom-in">
                  <Image src={patImg} width="500%" alt="find nothing"/>
              </div>

              <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
              <form style={{fontSize:'2rem'}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Id</label>
                    <input type="text" className="form-control" id="id" name="id" aria-describedby="emailHelp"  value={id}onChange={(e)=>setId(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp"  value={name}onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" name="age" aria-describedby="emailHelp"  value={age}onChange={(e)=>setage(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Disease</label>
                    <input type="text" className="form-control" id="disease" name="disease" aria-describedby="emailHelp"  value={disease}onChange={(e)=>setdisease(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Number</label>
                    <input type="text" className="form-control" id="number" name="number" aria-describedby="emailHelp"  value={number}onChange={(e)=>setnumber(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Treatment Description</label>
                <textarea className="form-control" id="description" name="description"  value={description}onChange={(e)=>setdiscription(e.target.value)} rows="3"></textarea>
                </div>
                <button type="submit" className="button" onClick={submitform}>Submit</button>
            </form>
              </div>

          </div>

      </div>
      </section>
      </>
  )
}
