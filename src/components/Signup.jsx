import React, { useState } from 'react'
import img from '../assets/images/loginPageImage.jpg'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [email,setEmail]=useState("")
  const [username,setUsername]=useState("")
  const [password,setPass]=useState("")
  const handleChange_email = event => {
    setEmail(event.target.value);
};
const handleChange_username = event => {
  setUsername(event.target.value);
};
const handleChange_pass = event => {
  setPass(event.target.value);
};
const handle_Click=()=>{
    
}
  return (
    <div >
      <div className="container Login-main-container flex">
        <div className="img-div">
          <img src={img} />
        </div>
        <div className="login-main-content">
          <form action="" className='flex'>
            <div className="form-box">
              <h2>Hello!</h2>
              <p>Register to our postpartum depression detection system and take the first step towards self-care.</p>
              <div className="login-input-field">
                <input type="text" placeholder='Enter full name or email' required='required' value={email} onChange={handleChange_email} />
              </div>
              <div className="login-input-field">
                <input type="text" placeholder='Create username' required='required' value={username} onChange={handleChange_username} />
              </div>
              <div className="login-input-field">
                <input type="password" placeholder='Create Password'required='required'  value={password} onChange={handleChange_pass}/>
              </div>
              <button className='primary-btn' type="submit" onClick={handle_Click}>Register</button>
              <h3>or</h3>
              <button className='primary-btn flex google-btn' type="submit"><i class="fa-brands fa-google"></i> &nbsp;Continue with Google</button>
              <div className='signup-opt flex'>
                <h5 >Already have an account?</h5>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
