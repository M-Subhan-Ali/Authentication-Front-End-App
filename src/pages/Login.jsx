import React, { useContext, useState } from 'react'
import {assets} from "../assets/assets.js"
import { useNavigate } from "react-router-dom"
import { appContext } from '../context/appContext.jsx'
import axios from "axios"
import { toast } from 'react-toastify'


const Login = () => {

  const navigate = useNavigate();

  const {Backend_URL , setIsLoggedIn , getUserData} = useContext(appContext)

  const [ pageDetail , setPageDetail ] = useState("Sign Up");
  const [ name , setName ] = useState("");
  const [ email , setEmail ] = useState("");
  const [ password , setPassword ] = useState("");


  const onSubmitHandler = async ( e ) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true ;

      if( pageDetail === "Sign Up" ){

      const {data} = await axios.post(`${Backend_URL}/api/auth/register`,{name , email , password})

      if(data.success){

        setIsLoggedIn(true)
        // alert(data.message)
        getUserData()
        toast.success(data.message, {
          position: "top-center",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored", // or "light", "dark"
        });
        
        navigate("/")

      }else{
        toast.error(data.message, {
          position: "top-center",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored", // or "light", "dark"
        });
      }
      
    }else{
      const {data} = await axios.post(`${Backend_URL}/api/auth/login` , { email , password })
      if(data.success){
        setIsLoggedIn(true)
        getUserData()
        toast.success(data.message, {
          position: "top-center",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored", // or "light", "dark"
        });
        navigate("/")
      }else{
        toast.error(data.message, {
          position: "top-center",
          autoClose: 3000, // 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored", // or "light", "dark"
        });
      }
    }
    } catch (error) {
      // alert(error.response.data.message)
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored", // or "light", "dark"
      });
      // console.log(error)
    }
  }


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
        <form onSubmit={onSubmitHandler}>
          {pageDetail === "Sign Up" && <div className='mb-4 flex items-center gap-3 w-full  px-5 py-2.5 rounded-full
          bg-[#333A5C]'>
            <img src={assets.person_icon} alt="person_icon" />
            <input type="text" placeholder='Full Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className='bg-transparent outline-none text-white' required />
          </div>}
          <div className='mb-4 flex items-center gap-3 w-full  px-5 py-2.5 rounded-full
          bg-[#333A5C]'>
            <img src={assets.mail_icon} alt="person_icon" />
            <input type="email" placeholder='Email ID'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='bg-transparent outline-none text-white' required />
          </div>
          <div className='mb-4 flex items-center gap-3 w-full  px-5 py-2.5 rounded-full
          bg-[#333A5C]'>
            <img src={assets.lock_icon} alt="person_icon" />
            <input type="password" placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='bg-transparent outline-none text-white' required />
          </div>
          <p 
          onClick={()=>navigate("/ResetPassword")}
          className='mb-4 text-indigo-500 hover:text-indigo-200
           cursor-pointer '>Forget Password?
          </p>
          <button type='submit' className='w-full py-2.5 rounded-full bg-gradient-to-r cursor-pointer 
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
