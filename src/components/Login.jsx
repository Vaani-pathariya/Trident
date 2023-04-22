import React, { useState } from 'react'
import img from '../assets/images/loginPageImage.jpg'
import { Link } from 'react-router-dom'
import { ref,onValue} from "firebase/database";
import {db_connecting} from './firebaseConfig'
export default function
    () {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [login_next,useLogin]=useState("/login")
    const handleChange_email = event => {
        setEmail(event.target.value);
    };

    const handleChange_pass = event => {
        setPassword(event.target.value);
    };
    const handle_Click=async (event)=>{
        onValue(ref(db_connecting),snapshot=>{
            const data=snapshot.val();
            if (data["Therapists"][email]["password"]==password){
                useLogin("/response")
            }
        })
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
                                <input type="text" placeholder='Enter username' required='required' onChange={handleChange_email}/>
                            </div>
                            <div className="login-input-field">
                                <input type="password" placeholder='Enter Password' required='required' onChange={handleChange_pass}/>
                            </div>
                            <div className="remember-me flex">
                                <input type="checkbox" />
                                <label htmlFor=""> Remember me</label>
                            </div>
                            <Link to={login_next} onClick={handle_Click}><button className='primary-btn'  >Login</button></Link>
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
