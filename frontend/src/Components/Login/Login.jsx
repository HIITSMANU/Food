import React, { useContext, useEffect, useState } from 'react'
import "./Login.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

const Login = ({setShowLogin}) => {

    const {url,settoken} = useContext(StoreContext)

    const [currstate , setcurrstate] = useState("Sign Up")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    console.log(data.name);

    const onChangeHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}) )
    }

    const onLogin = async(e) => {
        e.preventDefault()
        let newUrl = url;
        if(currstate==='Login'){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }

        const res = await axios.post(newUrl,data) 

        if(res.data.success){
            settoken(res.data.token)
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("name",res.data.user.name)
            setShowLogin(false)
        }
        else{
            alert(res.data.message  )
        }
        
    }

  
  return (
    <div className='login'>
        <form onSubmit={onLogin} className="login_container">
            <div className="login_title">
                <h2>{currstate}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login_inputs">
                {currstate==="Login"?<></>:<input  type="text" name="name" onChange={onChangeHandler} value={data.name} id="" placeholder='Enter  Your Full Name' required/>}
                <input  type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter Your Email ' required />
                <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='Enter Your Password' id="" />
            </div>
            <button type='submit'>{currstate === "Sign Up" ? "Create Account":"Login"}</button>
            <div className="login_condition">
                <input type="checkbox" name="" id="" required />
                <p>By continuing , I agree to the terms of use and privacy policy </p>
            </div>
            {currstate === "Login"
            ?<p>Create a new Account?<span onClick={()=> setcurrstate("Sign Up")}>Click Here</span></p>
            :<p>Already Have a Account? <span onClick={()=> setcurrstate("Login")}>Login</span></p>
            } 
        </form>
    </div>
  )
}

export default Login
