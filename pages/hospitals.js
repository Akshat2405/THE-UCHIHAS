import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import  db from '../public/firebase-config';
export default function Hospital() {
      const [data,setdata]=useState();
      const ref=db.ref('/');
            ref.once('value',(sanpshot)=>{
                  setdata(sanpshot.val());
            });
      const showdata=()=>{
            let str=[];
            if(data!==undefined){
                  for(let key in data){
                        let key2="/hospitals/"+key+"/login";
                        let key3="/hospitals/"+key+"/searchbyid";
                        str.push(
                              <div className="card" style={{'width':'35rem','margin':'10px'}}>
                                    <div className="card-body">
                                    <h5 className="card-title" style={{fontSize:'2rem'}}>{key}</h5>
                                    <p className="card-text">New Delhi(S)</p>
                                    <p className="card-text"></p>
                                    <Link href= {key2}><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
                                    <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
                                    <Link href= {key3}><a ><button className="button" style={{width:'100%'}}>Search Patient by Id</button></a></Link>
                                    </div>
                              </div>
                          )
                  }
                  return str;
                  console.log(str);
            }

      }
  return (
    <>
    <header>
    <div className="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
        </ul>
    </nav>
    
    <div className="fas fa-bars"></div>

    </div>
    </header>
    <div className="row min-vh-100 align-items-center text-center text-md-left" style={{marginTop:'100px'}}>
      <div className="row" style={{fontSize:'2rem',width:'100%',margin:'auto'}}>
      {showdata()}
      </div>
      </div>
      </>
  )
}
