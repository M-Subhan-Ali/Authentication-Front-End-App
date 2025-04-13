import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import Login from './pages/Login'
const App = () => {
  return (
    <div>
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
