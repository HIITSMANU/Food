import React, { useState } from 'react'
import "./Login.css"
import { useActionData } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {

    const [currstate , setcurrstate] = useState("Sign Up")
  return (
    <div className='login'>
        <div className="login_container">
            <div className="login_title">
                <h2>{currstate}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login_inputs">
                {currstate==="Login"?<></>:<input type="text" name="Your Name" id="" placeholder='Enter  Your Full Name' required/>}
                <input type="email" name='Your Email' placeholder='Enter Your Email ' required />
                <input type="password" name="Your Password" placeholder='Enter Your Password' id="" />
            </div>
            <button>{currstate === "Sign Up" ? "Create Account":"Login"}</button>
            <div className="login_condition">
                <input type="checkbox" name="" id="" required />
                <p>By continuing , I agree to the terms of use and privacy policy </p>
            </div>
            {currstate === "Login"
            ?<p>Create a new Account?<span onClick={()=> setcurrstate("Sign Up")}>Click Here</span></p>
            :<p>Already Have a Account? <span onClick={()=> setcurrstate("Login")}>Login</span></p>
            } 
        </div>
    </div>
  )
}

export default Login
