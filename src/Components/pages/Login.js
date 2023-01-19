import React from 'react'
import "./Login.css"
import { useState } from 'react';
import mail from "./assets/mail.png"
import lock from "./assets/lock.png"

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
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept" : "application/json" },
      body: JSON.stringify({ 'EmailAddress': maill, 'Password': lockk })
    }
    fetch(url, requestOptions)
      .then(response => {
        console.log("11 " + response.status);
        if (response.ok) {
          console.log("22 ok");
          response.json().then(data => {
            console.log("33 data: " + JSON.stringify(data));
            console.log("44 token: " + JSON.stringify(data.token));
            sessionStorage.setItem("AUTH_ID", data.id);
            sessionStorage.setItem("AUTH_TOKEN", data.token);
            window.location.href = "/";
          });
        }
      })  ;
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
        <img src={mail} alt="mail" className="ima1"></img>
        <input className="input-field" type="text" value={maill} onChange={handleMail} />
      </div>
      <div className="center-input">
        <img src={lock} alt="lock" className="ima1"></img>
        <input className="input-field" type="text" value={lockk} onChange={handleLock} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      </div>
      <div className="button-container1">
        <button className="button login-button1" onClick={() => handleLogin()}>
          Log In
        </button>
      </div>
    </>
  )
}

export default Login
