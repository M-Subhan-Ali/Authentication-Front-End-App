import React from 'react'
import logo from "../assets/favicon.jpg"

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="logo.jpg" className='w-14 sm:w-24 rounded-3xl' />
      <button>Login</button>
    </div>
  )
}

export default Navbar
