import React from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import mail from "./assets/mail.png"
import lock from "./assets/lock.png"
import { Message } from '@mui/icons-material';

function Login() {
  const [maill, setMail] = useState('');
  const [lockk, setLock] = useState('');

  const handleMail = (event) => {
    setMail(event.target.value);
  };
  
  const handleLock = (event) => {
    setLock(event.target.value);
  };

  const handleLogin = async () => {
    const url = "http://localhost:3000/users/login"
    const requestOptions = {
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({EmailAddress:maill,Password:lockk})
    }
    fetch(url,requestOptions)
        .then(response => {
          console.log(response.status);
          console.log(response.data)
          if (response.ok) {
            window.location.href="/";
          }
        })
        .then(data => console.log(data));
      }

  return (
    <>
    <div className="header1" style={{ fontFamily: "outfit" }}> 
          Habby! 
    </div>
    <div className="loginheader" style={{ fontFamily: "outfit" }}> 
    Log In 
    </div>
    <div className="loginmsg" style={{ fontFamily: "outfit" }}> 
    Welcome back! Hop right in and see what you have missed.
    </div>
    <div className="center-input">
    <img src={mail} alt = "mail" className="ima1"></img>
    <input className="input-field" type="text" maxlength="35" size={40} value={maill} onChange={handleMail} />
    </div>
    <div className="center-input">
    <img src={lock} alt = "lock" className="ima1"></img>
    <input className="input-field" type="text"  maxlength="35" size={40} value={lockk} onChange={handleLock} />
    </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
</div>
    <div className="button-container1">
        {/*<Link to={{pathname: `/`}}>*/} 
            <button className="button login-button1" onClick={() =>handleLogin()}>
              Log In
            </button>
        {/*</Link>*/}
  </div>
    </>
  )
}

export default Login
