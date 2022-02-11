import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import loginImg from '../public/Login-img.svg'
import { useState } from 'react'
export default function Login() {
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
  return (
    <>
    <header>
    <div class="container">

    <Link href="/"><a className="logo"><span>H</span>ealth<span>C</span>are.</a></Link>

    <nav className="nav">
        <ul>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
            <li><Link href="/login"><a className="navtag">Sign in</a></Link></li>
            <li><Link href="/"><a className="navtag">home</a></Link></li>
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
            <form style={{fontSize:'2rem',border:'2px solid black'}}>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-primary" style={{fontSize:'2rem'}}>Submit</button>
            </form>
    </div>
</div>
</div>

</section>
      </>
  )
}
