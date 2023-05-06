import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './header.css'
const Header = () => (
    <div >
        <div className="container header-main-content flex">
            <div className="babyblues-header-logo">
                <h3 >TherapyPal</h3>
                <img src={logo} alt="" />
            </div>
            <div className='navbar-links'>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>What is TherapyPal?</a></li>
                    <li><a href=''>Case Studies</a></li>
                    <li><a href=''>About</a></li>
                </ul>
                <button><Link to="/signup" >Signup/Login</Link></button>
            </div>
        </div>
    </div >
)

export default Header;