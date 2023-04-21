import React from 'react'
import img from '../assets/images/loginPageImage.jpg'

export default function
    () {
    return (
        <div >
            <div className="container  hey Login-main-container flex">
                <div className="img-div">
                    <img src={img} />
                </div>
                <div className="login-main-content">
                    <form action="" className='flex'>
                        <div className="form-box">
                            <h2>Hello!</h2>
                            <p>Login to our postpartum depression detection system and take the first step towards self-care.</p>
                            <div className="login-input-field">
                                <input type="text" placeholder='Enter username or Email' required='required' />
                            </div>
                            <div className="login-input-field">
                                <input type="password" placeholder='Enter Password' required='required' />
                            </div>
                            <div className="remember-me flex">
                                <input type="checkbox" />
                                <label htmlFor=""> Remember me</label>
                            </div>
                            <button className='primary-btn' type="submit">Login</button>
                            <h3>or</h3>
                            <button className='primary-btn flex google-btn' type="submit"><i class="fa-brands fa-google"></i> &nbsp;Continue with Google</button>
                            <div className='signup-opt flex'>
                                <h5 >Don't have an account?</h5>
                                <a href="">Sign up</a>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
