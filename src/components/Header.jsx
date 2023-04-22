import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className='Header-main-container' >
        <div className="container header-main-content flex">
            <div className="babyblues-header-logo">
                <h1>BabyBlues.</h1>
            </div>
            <div className="nav-links-container">
                <ul className="nav-links flex">
                    <li className='nav-link'><Link to="/" ><i class="fa-solid fa-user"></i></Link></li>
                    <li className='nav-link primary-btn'><Link to="/signup" >Signup/Login</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
