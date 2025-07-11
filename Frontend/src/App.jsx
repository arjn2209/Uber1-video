import React from 'react'
import { Route, Routes, UNSAFE_RouteContext } from 'react-router-dom'
import UserLogin from './Pages/UserLogin'
import Home from './Pages/Home'
import UserSignup from './Pages/UserSignup'
import Captainlogin from './Pages/Captainlogin'
import Captainsignup from './Pages/Captainsignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/captain-login" element={<Captainlogin/>} />
        <Route path="/captain-signup" element={<Captainsignup/>} />
      </Routes>
    </div>
  )
}

export default App
