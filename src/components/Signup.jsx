import React from 'react'
import img from '../assets/images/loginPageImage.jpg'


export default function Signup() {
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
                <input type="text" placeholder='Enter full name or email' required='required' />
              </div>
              <div className="login-input-field">
                <input type="text" placeholder='Create username' required='required' />
              </div>
              <div className="login-input-field">
                <input type="password" placeholder='Create Password'required='required' />
              </div>
              <button className='primary-btn' type="submit">Register</button>
              <h3>or</h3>
              <button className='primary-btn flex google-btn' type="submit"><i class="fa-brands fa-google"></i> &nbsp;Continue with Google</button>
              <div className='signup-opt flex'>
                <h5 >Already have an account?</h5>
                <a href="">Login</a>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
