import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./App.css"

function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleName = (e) => setName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  async function createAccount() {
    try {
      const formData = {
        myName: name,
        myEmail: email,
        myPassword: password
      }

      const response = await fetch("https://69088be62d902d0651b0c71e.mockapi.io/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast.success("✅ Account Created Successfully!", { position: "top-center" })
        setTimeout(() => navigate("/login"), 5000)
        setName("")
        setEmail("")
        setPassword("")
      } else {
        toast.error("❌ Account Creation Failed", { position: "top-center" })
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Something went wrong!", { position: "top-center" })
    }
  }

  return (
    <div className="signup-container">
      <ToastContainer />
      <div className="signup-card">
        <h1>Create Account</h1>

        <div className="form-group">
          <label>Enter Name</label>
          <input value={name} onChange={handleName} type="text" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label>Enter Email</label>
          <input value={email} onChange={handleEmail} type="email" placeholder="your@email.com" />
        </div>

        <div className="form-group">
          <label>Enter Password</label>
          <input value={password} onChange={handlePassword} type="password" placeholder="********" />
        </div>

        <button onClick={createAccount} className="signup-btn">Sign Up</button>

        <p className="login-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
