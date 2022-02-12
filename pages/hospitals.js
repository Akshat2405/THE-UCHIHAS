import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
export default function hospital() {
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
    <div className="row min-vh-100 align-items-center text-center text-md-left">
      <div className="row" style={{fontSize:'2rem',width:'100%',margin:'auto'}}>
      <div class="card" style={{'width':'35rem','margin':'10px'}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:'2rem'}}>All India Institute of Medical Sciences (AIIMS)</h5>
            <p class="card-text">New Delhi(S)</p>
            <p class="card-text"></p>
            <Link href="/login"><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
            <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
            </div>
      </div>
      <div class="card" style={{'width':'35rem','margin':'10px'}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:'2rem'}}>Safdarjung Hospital</h5>
            <p class="card-text">New Delhi(S)</p>
            <p class="card-text"></p>
            <Link href="/login"><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
            <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
            </div>
      </div>
      <div class="card" style={{'width':'35rem','margin':'10px'}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:'2rem'}}>Lok Nayak Jai Prakash Narain (LNJP) Hospital</h5>
            <p class="card-text"> Delhi.(N)</p>
            <p class="card-text"></p>
            <Link href="/login"><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
            <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
            </div>
      </div>
      <div class="card" style={{'width':'35rem','margin':'10px'}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:'2rem'}}>G.B. Pant Hospital </h5>
            <p class="card-text">Delhi.(N)</p>
            <p class="card-text"></p>
            <Link href="/login"><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
            <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
            </div>
      </div>
      <div class="card" style={{'width':'35rem','margin':'10px'}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:'2rem'}}>Guru Tegh Bahadur (GTB) Hospital & University College of Medical Sciences (UCMS)</h5>
            <p class="card-text"> Delhi(E)</p>
            <p class="card-text"></p>
            <Link href="/login"><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
            <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
            </div>
      </div>
      <div class="card" style={{'width':'35rem','margin':'10px'}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:'2rem'}}>Red Cross Society Hospital, New Seemapuri</h5>
            <p class="card-text">Delhi(E)</p>
            <p class="card-text"></p>
            <Link href="/login"><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
            <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
            </div>
      </div>
      <div class="card" style={{'width':'35rem','margin':'10px'}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:'2rem'}}>Deen Dayal Upadhyaya Hospital (DDU), Hari Nagar</h5>
            <p class="card-text">New Delhi(W)</p>
            <p class="card-text"></p>
            <Link href="/login"><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
            <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
            </div>
      </div>
      <div class="card" style={{'width':'35rem','margin':'10px'}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:'2rem'}}>All India Institute of Medical Sciences (AIIMS)</h5>
            <p class="card-text">New Delhi</p>
            <p class="card-text"></p>
            <Link href="/login"><a ><button className="button" style={{margin:'5px'}}>Sign in</button></a></Link>
            <Link href="/contact"><a ><button className="button">Contact Us</button></a></Link>
            </div>
      </div>
      </div>
      </div>
      </>
  )
}
