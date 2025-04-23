import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { appContext } from '../context/appContext'

const Header = () => {

  const {UserData} = useContext(appContext)

  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
      <img src={assets.header_img} alt="Robot Image" 
      className='w-36 h-36 rounded-full mb-6 cursor-pointer'/>

      <h1 className='flex items-center gap-2 text-xl sm:text-3xl
      font-medium mb-2'>Hey {UserData ? UserData.name :  "Developer"}!  <img src={assets.hand_wave} alt="handwave_image" 
      className='w-8 aspect-square'/></h1>

      <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to our App!</h2>
      <p className='mb-8 max-w-md'>Let's Start with a quick product tour and we will have you up and
        running in no Time
      </p>
      <button className='border border-gray-500 px-8 py-2.5 rounded-full
      hover:bg-gray-200 cursor-pointer transition-all'>Get Started!</button>
    </div>
  )
}

export default Header
