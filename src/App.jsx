import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/EmailVerify' element={<EmailVerify/>} />
      <Route path='/ResetPassword' element={<ResetPassword/>} />
      <Route path='/Login' element={<Login/>} />
     </Routes>
    </div>
  )
}

export default App
