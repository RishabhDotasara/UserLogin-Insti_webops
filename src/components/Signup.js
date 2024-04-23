import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const registerUser = async ()=>{
    
      const secretKey = "webops";
      const encryptedPassword =   await CryptoJS.AES.encrypt(password, secretKey).toString()
      const data = {username:username,password:encryptedPassword}
      localStorage.setItem('data',JSON.stringify(data));
      navigate('/');
  }

  return (
    <div className='login-page'>
      <h2>SignUp</h2>
      <div className="inputs">
        <input type="text" placeholder='Username' value={username} onChange={(e)=>{
          setUsername(e.target.value);
        }}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        <button className='btn' onClick={()=>{
          registerUser();
        }}>Signup</button>
      </div>
      <Link to="/" style={{textDecoration:'none'}}>Login?</Link>
    </div>
  )
}
