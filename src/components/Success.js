import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <div>
      <h1 style={{color:'white'}}>Logged in successfully.</h1>
      <Link to="/UserLogin-Insti_webops" style={{marginRight:10+"px"}}>Login Page</Link>
      <Link to="/UserLogin-Insti_webops/signup">Signup Page</Link>
    </div>
  )
}
