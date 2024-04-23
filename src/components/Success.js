import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <div>
      <h1 style={{color:'white'}}>Logged in successfully.</h1>
      <Link to="/" style={{marginRight:10+"px"}}>Login Page</Link>
      <Link to="/signup">Signup Page</Link>
    </div>
  )
}
