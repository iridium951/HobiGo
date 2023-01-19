import React from 'react';
import "./Login.css";
import { useState } from 'react';
import mail from "./assets/mail.png";
import lock from "./assets/lock.png";
import name from "./assets/name.png";
import { Link } from "react-router-dom";
import { Box } from '@mui/material';


function Signup() {
  const [maill, setMail] = useState('');
  const [lockk, setLock] = useState('');
  const [namee, setName] = useState('');

  const handleMail = (event) => {
    setMail(event.target.value);
  };

  const handleLock = (event) => {
    setLock(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSignup = async () => {
    //const url = "http://localhost:3001/users";
    const url = "https://habby-backend.onrender.com/users";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ 'EmailAddress': maill, 'Name': namee, 'Password': lockk })
    }
    fetch(url, requestOptions)
      .then(response => {
        //console.log("11 " + response.status);
        if (response.ok) {
          //console.log("22 ok");
          response.json().then(data => {
            //console.log("33 data: " + JSON.stringify(data));
            //console.log("44 token: " + JSON.stringify(data.token));
            sessionStorage.setItem("AUTH_ID", data.id);
            sessionStorage.setItem("AUTH_TOKEN", data.token);
            window.location.href = "/";
          });
        }
      });
  }

  return (
    <>
      <div className="header1" style={{ fontFamily: "outfit" }}>
        Habby!
      </div>
      <Box bgcolor="white" justifyItems="center" marginLeft="5%" marginRight="5%" borderRadius="15px">
        <div className='login' style={{ fontFamily: "outfit", fontSize: "34px" }}>
          Sign Up
        </div>
        <div className="loginmsg" style={{ fontFamily: "outfit" }}>
          We are so happy that you have decided to join us!
        </div>
        <div className="center-input">
          <img src={mail} alt="mail" className="ima1" height="20px"></img>
          <input className="input-field" type="text" value={maill} onChange={handleMail} />
        </div>
        <div className="center-input">
          <img src={name} alt="name" className="ima1" height="20px"></img>
          <input className="input-field" type="text" value={namee} onChange={handleName} />
        </div>
        <div className="center-input">
          <img src={lock} alt="lock" className="ima1" height="20px"></img>
          <input className="input-field" type="text" value={lockk} onChange={handleLock} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        </div>
      </Box>
      <div className="button-container1">
        <Link to={{ pathname: `/login` }}>
          <button className="button login-button1" onClick={() => handleSignup()}>
            Sign Up
          </button>
        </Link>
      </div>
    </>
  )
}

export default Signup;

