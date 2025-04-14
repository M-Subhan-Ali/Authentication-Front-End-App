import React, { useState } from 'react'
import {assets} from "../assets/assets.js"
import { useNavigate } from "react-router-dom"
const Login = () => {

  const navigate = useNavigate();

  const [ pageDetail , setPageDetail ] = useState("Sign Up")

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0
    bg-gradient-to-br from-blue-200 to-purple-400 '>
      <img 
      onClick={()=>navigate("/")}
      src={assets.logo} alt="logo" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32
      cursor-pointer' />
      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96
      text-sm text-indigo-300'>

        <h2 className='text-3xl font-semibold text-white text-center mb-3'>
          { pageDetail === "Sign Up" ? "Create Account" : "Login"}
        </h2>

        <p className='text-center text-sm mb-6'>
          { pageDetail === "Sign Up" ? "Create Your Account" : "Login to Your Account!"}
        </p>
        <form>
          {pageDetail === "Sign Up" && <div className='mb-4 flex items-center gap-3 w-full  px-5 py-2.5 rounded-full
          bg-[#333A5C]'>
            <img src={assets.person_icon} alt="person_icon" />
            <input type="text" placeholder='Full Name'
            className='bg-transparent outline-none text-white' required />
          </div>}
          <div className='mb-4 flex items-center gap-3 w-full  px-5 py-2.5 rounded-full
          bg-[#333A5C]'>
            <img src={assets.mail_icon} alt="person_icon" />
            <input type="email" placeholder='Email ID'
            className='bg-transparent outline-none text-white' required />
          </div>
          <div className='mb-4 flex items-center gap-3 w-full  px-5 py-2.5 rounded-full
          bg-[#333A5C]'>
            <img src={assets.lock_icon} alt="person_icon" />
            <input type="password" placeholder='Password'
            className='bg-transparent outline-none text-white' required />
          </div>
          <p 
          onClick={()=>navigate("/ResetPassword")}
          className='mb-4 text-indigo-500 hover:text-indigo-200
           cursor-pointer '>Forget Password?
          </p>
          <button className='w-full py-2.5 rounded-full bg-gradient-to-r cursor-pointer 
          from-indigo-500 to-indigo-900 text-white font-medium hover:text-gray-300'>{pageDetail}</button>
        </form>
        
        {
          pageDetail === "Sign Up" ? (          
          <p className='text-gray-400 text-center text-xs mt-4'>already have an account?{" "}
           <span 
           onClick={()=>setPageDetail("Login")}
           className='text-blue-400 cursor-pointer underline'>Login here</span>
          </p>
        ) : (
          <p className='text-gray-400 text-center text-xs mt-4'>Don't have an account?{" "}
            <span 
            onClick={()=>setPageDetail("Sign Up")}
            className='text-blue-400 cursor-pointer underline'>Sign Up</span>
          </p>
        )
        }
      
      </div>
    </div>
  )
}

export default Login
