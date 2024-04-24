import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const registerUser = async () => {
    const secretKey = "webops";
    const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();


    const storedData = localStorage.getItem('data');
    const usersData = JSON.parse(storedData) || [];

    const search = usersData.filter((e)=>{if(e.username===username){return (e)}else{return(null)}})
    if(search.length > 0)
    {
      alert("Username is taken!")
    }
    else {

        const userToAdd = { username: username, password: encryptedPassword };
        const updatedUsers = [...usersData, userToAdd];
    
        setUsers(updatedUsers);
        localStorage.setItem('data', JSON.stringify(updatedUsers));
    
        navigate('/');
    }
  }

  useEffect(() => {
    console.log(users);
  }, [users]); // Log users whenever it changes

  return (
    <div className='login-page'>
      <h2>SignUp</h2>
      <div className="inputs">
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='btn' onClick={registerUser}>Signup</button>
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}>Login?</Link>
    </div>
  )
}
