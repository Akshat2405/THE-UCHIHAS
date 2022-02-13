import Link from 'next/link'
import Image from 'next/image'
import loginImg from '../../../public/Login-img.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function Login(props) {
    const router = useRouter();
    const patId=router.query.hospname;
    let str="/hospitals/"+patId;
    const[password,setPassword]=useState("");
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
    <section className="login" id="login">

<div className="container">

    <div className="row min-vh-100 align-items-center text-center text-md-left">

        <div className="col-md-6 pr-md-5" data-aos="zoom-in">
            <Image src={loginImg} width="500%" alt="find nothing"/>
        </div>
        <div className="col-md-6 pl-md-5" data-aos="fade-left">
            <form style={{fontSize:'2rem'}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
            <Link href={str}><a ><button className="button">Submit</button></a></Link>
            </form>
    </div>
</div>
</div>

</section>
      </>
  )
}
