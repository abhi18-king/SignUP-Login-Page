import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "./App.css"  // ✅ same stylesheet as SignUp for consistent look
import { ToastContainer, toast } from 'react-toastify'


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState([])
  const navigate = useNavigate()

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  async function getAllData() {
    const result = await fetch("https://69088be62d902d0651b0c71e.mockapi.io/user")
    const response = await result.json()
    setData(response)
  }

  useEffect(() => {
    getAllData()
  }, [])

  function handleLogin() {
    const userExists = data.find(item => item.myEmail === email && item.myPassword === password)
    if (userExists) {
    toast.success("✅ Login Successfully!", { position: "top-center" })
        setTimeout(() => navigate("/HOme"), 5000)
    } else {
      toast.error("❌ Login Failed", { position: "top-center" })
    }
  }

  return (
    
    <div className="signup-container">
      <div className="signup-card">
        <h1>Welcome Back 👋</h1>

        <div className="form-group">
          <label>Email Address</label>
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            onChange={handlePassword}
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button onClick={handleLogin} className="signup-btn">Login</button>

        <p className="login-text">
          Don’t have an account? <Link to="/">Sign Up here</Link>
           <ToastContainer />
        </p>
      </div>
    </div>
  )
}

export default Login
