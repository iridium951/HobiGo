import React from 'react'
import "./Signup.css"
import { Link } from "react-router-dom"
import { useState } from 'react';
import mail from "./assets/mail.png"
import lock from "./assets/lock.png"
import name from "./assets/name.png"

function Signup() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  return (
    <>
    <div className="header1" style={{ fontFamily: "outfit" }}> 
          Habby! 
    </div>
    <div className="loginheader" style={{ fontFamily: "outfit" }}> 
    Sign Up
    </div>
    <div className="loginmsg" style={{ fontFamily: "outfit" }}> 
    We are so happy that you have decided to join us!
    </div>
    <div className="center-input">
    <img src={mail} alt = "mail" className="ima1"></img>
    <input className="input-field" type="text" maxlength="35" size={40} value={value1} onChange={handleChange1} />
    </div>
    <div className="center-input">
    <img src={name} alt = "name" className="ima1"></img>
    <input className="input-field" type="text"  maxlength="35" size={41} value={value3} onChange={handleChange3} />
    </div>
    <div className="center-input">
    <img src={lock} alt = "lock" className="ima1"></img>
    <input className="input-field" type="text"  maxlength="35" size={40} value={value2} onChange={handleChange2} />
    </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
</div>
    <div className="button-container1">
        <Link to={{pathname: `/`}}
 > 
            <button className="button login-button1">
              Sign Up
            </button>
        </Link>
  </div>
    </>
  )
}

export default Signup

