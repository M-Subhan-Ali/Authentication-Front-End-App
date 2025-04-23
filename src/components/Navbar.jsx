import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from "react-router-dom"
import { appContext } from '../context/appContext'
import axios from 'axios'
import { toast } from 'react-toastify' 

const Navbar = () => {

  const navigate = useNavigate()

  const {Backend_URL, setIsLoggedIn, UserData, setUserData ,}= useContext(appContext)

  const LogoutHandler = async (e) => {
   e.preventDefault();
  try {
    axios.defaults.withCredentials = true;
     const {data} = await axios.post(`${Backend_URL}/api/auth/logout`)
     data.success && setIsLoggedIn(false)
     data.success && setUserData(false)
     toast.success("Successfully Logout!")
     navigate("/")
  } catch (error) {
    toast.error(error.message)
  }
  }


  const send_Verification_OTP = async ( ) => {
    try {
      axios.defaults.withCredentials = true ; 
      const {data} = await axios.post(`${Backend_URL}/api/auth/send-verify-otp`)
      if(data.success){
        toast.success("Verification OTP Sent Successfully!")
        navigate("/EmailVerify");
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6
    sm:px-24 absolute top-0'> 

      <img src={assets.logo} alt="logo.jpg" className='w-24 sm:w-32 rounded-3xl cursor-pointer' />
      {
        UserData ? 
        <div className='w-8 h-8 flex justify-center items-center rounded-full
         bg-black text-white relative group cursor-pointer'>
         {UserData.name[0].toUpperCase()}
         <div className='absolute hidden group-hover:block
         top-0 right-0 text-black pt-10 z-10'>
          <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>

            { !UserData.isAccountVerify && <li 
            onClick={send_Verification_OTP}
            className='py-1 px-2 hover:border-gray-200 cursor-pointer
            '>verify Email</li>
            }

            <li onClick={LogoutHandler} className='py-1 px-2 hover:border-gray-200 cursor-pointer pr-10
            '>Logout</li>
          </ul>
         </div>
        </div>
    :  
      <button 
      onClick={()=>navigate("/Login")}
      className='flex items-center gap-2 border border-gray-500
      rounded-full px-6 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer
      transition-all'>
        Login <img src={assets.arrow_icon}  alt='arrow-icon' />
      </button>
      }
    </div>
  )
}

export default Navbar
