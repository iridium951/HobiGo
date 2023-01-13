import React from 'react'
import "./Landing.css"
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"


function Landing() {
  return (
    <>
    <div className="header" style={{ fontFamily: "outfit" }}> 
          Habby! 
    </div>
    <div className="blurb-header" style={{ fontFamily: "outfit" }}> 
    Discover new friends & hobbies
    </div>
    <div className="blurb" style={{ fontFamily: "outfit" }}> 
    Take part in your favourite Hobbies with new people or create your 
    own event and host a hobby.
    </div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Box width={326} height={241} m={1} borderRadius={2} style={{backgroundColor: 'rgba(158, 212, 104, 1)'}} />
</div>
    <div className="button-container">
        <Link to={{pathname: `/login`}}
 > 
            <button className="button login-button">
              Log In
            </button>
        </Link>
        <Link to={{pathname: `/signup`}}> 
            <button className="button signup-button">
              Sign Up
            </button>
        </Link>
  </div>
    </>
  )
}

export default Landing