import React, { useState } from 'react'
import {assets} from "../assets/assets.js"

const Login = () => {

  const [ pageDetail , setPageDetail ] = useState("Sign Up")

  return (
    <div className='flex items-center justify-center min-h-screen px-6 sm:px-0
    bg-gradient-to-br from-blue-200 to-purple-400 '>
      <img src={assets.logo} alt="logo" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32
      cursor-pointer' />
      <div>
        <h2>{ pageDetail === "Sign Up" ? "Create Account" : "Login"}</h2>
        <p>{ pageDetail === "Sign Up" ? "Create Your Account" : "Login to Your Account!"}</p>
      </div>
    </div>
  )
}

export default Login
