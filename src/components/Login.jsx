import React, { useState } from 'react'
import img from '../assets/images/loginPageImage.jpg'
import { Link } from 'react-router-dom'
export default function
    () {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleChange_email = event => {
        setEmail(event.target.value);
    };
    const handleChange_pass = event => {
        setPassword(event.target.value);
    };
    const handle_Click=async ()=>{
        const todo="yes i am working"
        const response = await fetch("/add_data", {
            method: "POST",
            headers: {
            'Content-Type' : 'application/json'
            },
            body: JSON.stringify(todo)
            })
            if (response.ok){
            console.log("it worked")
            }
    }
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
                                <input type="text" placeholder='Enter username or Email' required='required' onChange={handleChange_email}/>
                            </div>
                            <div className="login-input-field">
                                <input type="password" placeholder='Enter Password' required='required' onChange={handleChange_pass}/>
                            </div>
                            <div className="remember-me flex">
                                <input type="checkbox" />
                                <label htmlFor=""> Remember me</label>
                            </div>
                            <button className='primary-btn' type="submit" onClick={handle_Click}>Login</button>
                            <h3>or</h3>
                            <button className='primary-btn flex google-btn' type="submit"><i class="fa-brands fa-google"></i> &nbsp;Continue with Google</button>
                            <div className='signup-opt flex'>
                                <h5 >Don't have an account?</h5>
                                <Link to="/signup">Sign up</Link>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
