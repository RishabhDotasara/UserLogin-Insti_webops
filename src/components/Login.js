import React, { useState } from "react";
import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    const storedData = localStorage.getItem("data");
    const userData = JSON.parse(storedData);
    const secretKey = "webops";
  
    console.log("Username:", email);
    console.log("Password:", password);
    console.log("UserData:", userData);
  
    if (userData) {
      for (const user of userData) {
        const decryptedPassword = await CryptoJS.AES.decrypt(
          user.password,
          secretKey
        ).toString(CryptoJS.enc.Utf8);
        console.log("Decrypted Password:", decryptedPassword);
        console.log("Password:", password);
        if (user.email === email && decryptedPassword === password) {
          navigate("/UserLogin-Insti_webops/success");
          return; // Exit the loop and function once user is found
        }
      }
      alert("Invalid Email or password");
    } else {
      alert("Users not found. Please register a user!");
      navigate("/UserLogin-Insti_webops/signup");
    }
  };
  

  return (
    <div className="login-page">
      <h2>Login</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" onClick={loginUser}>
          Login
        </button>
      </div>
      <Link to="/UserLogin-Insti_webops/signup" style={{ textDecoration: "none" }}>
        Signup?
      </Link>
    </div>
  );
}
