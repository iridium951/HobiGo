import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material';


function Event() {
    const location = useLocation();
    const { about, date, image, loc, visnum } = location.state;
    let newDate = new Date(date);
    let options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    let formattedDate = newDate.toLocaleString('en-US', options);

    return (
      <div>
        <img src={image} alt='images' style={{maxWidth: "100%" }} />

        <Box bgcolor="white" padding="1rem" marginTop="0.5rem" style={{ display: "flex", alignItems: "center"}}>
          <span className="material-symbols-outlined" style={{marginRight: "1rem", color: "rgba(158, 212, 104, 1)"}}>
            calendar_today
          </span>
          <p style={{ fontFamily: "outfit", fontSize:"18px", textAlign: "center"}}>  
            {formattedDate}    
          </p> 
        </Box>

        <Box bgcolor="white" padding="1rem" marginTop="0.5rem" style={{ display: "flex", alignItems: "center"}}>
          <span className="material-symbols-outlined" style={{marginRight: "1rem", color: "rgba(158, 212, 104, 1)" }}>
            location_on
          </span>
          <p style={{ fontFamily: "outfit", fontSize:"18px", textAlign: "center"}}>  
            {loc}    
          </p> 
        </Box>
        
     
        <Box bgcolor="white" padding="1rem" marginTop="0.5rem" style={{ display: "flex", alignItems: "center"}}>
          <span className="material-symbols-outlined" style={{marginRight: "1rem", color: "rgba(158, 212, 104, 1)"}}>
            person
          </span>
          <p style={{ fontFamily: "outfit", fontSize:"18px", textAlign: "center"}}>  
            {visnum} going   
          </p> 
        </Box>
        
        <Box bgcolor="white" paddingBottom="0.5rem" paddingTop="0.5rem" marginTop="0.5rem">
          <p  className="interests" style={{ fontFamily: "outfit", fontSize:"18px" }}>{about}</p>
        </Box>
    
      </div>
    )
  }

export default Event
