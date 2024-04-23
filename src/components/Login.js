import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const secretKey = "webops";
  const loginUser = async ()=>{
    const storedData = await localStorage.getItem('data');
    const userData = await JSON.parse(storedData);
    const decryptedPassword = await CryptoJS.AES.decrypt(userData.password,secretKey).toString(CryptoJS.enc.Utf8)

    if (decryptedPassword == password)
    {
      navigate("/success")
    }
    console.log(userData);
  }

  return (
    <div className='login-page'>
      <h2>Login</h2>
      <div className="inputs">
        <input type="text" placeholder='Username'  onClick={(e)=>{setUsername(e.target.value)}}/>
        <input type="password" placeholder='Password'  onClick={(e)=>{setPassword(e.target.value)}} />
        <button className='btn' onClick={()=>{
          loginUser();
        }}>Login</button>
      </div>
      <Link to="/signup" style={{textDecoration:'none'}}>Signup?</Link>
    </div>
  )
}
