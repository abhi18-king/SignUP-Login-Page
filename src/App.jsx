import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />   {/* ✅ add '/' before home */}
      </Routes>
    </BrowserRouter>
  )
}
export default App
