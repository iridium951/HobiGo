import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material';


function Event() {
    const location = useLocation();
    const { about, date, loc} = location.state;
  return (
    <div>
    <Box bgcolor="white" padding="1rem">
      <p  className="interests" style={{ fontFamily: "outfit", fontSize:"18px" }}>{about}</p>
    </Box>
    
    <p>{date}</p>
    <p>{loc}</p>
    </div>
  )
}

export default Event
