import React from 'react'

export default function Header() {
  return (
    <div className='Header-main-container' >
        <div className="container header-main-content flex">
            <div className="babyblues-header-logo">
                <h1>BabyBlues.</h1>
            </div>
            <div className="nav-links-container">
                <ul className="nav-links flex">
                    <li><a href="" className='nav-link'><i class="fa-solid fa-user"></i></a></li>
                    <li><a href="" className='nav-link primary-btn'>Signup/Login</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
