import React from 'react'
import "./YourInterests.css"
import { Box, Chip } from '@mui/material';

function YourInterests() {
  return (
    <>
    <div className="interests" style={{fontFamily: "outfit"}}> 
        Your Interests 
    </div>
    <Box borderRadius="15px" bgcolor="white" padding="1rem" margin="1rem" justifyContent="center" flexWrap="wrap">
    
    <Chip label="Sports" variant="outlined" size="large" style={{ margin: '0 8px 8px 0' }} />
    <Chip label="Basketball" variant="outlined" style={{ margin: '0 8px 8px 0' }} />
    <Chip label="Books" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Art" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Hiking" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Football" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Art" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Hiking" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Football" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Art" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Hiking" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Football" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Art" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Hiking" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Football" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Art" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Hiking" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Football" variant="outlined" style={{ margin: '0 8px 8px 0' }}/>
    <Chip label="Add More" variant="outlined" style={{ backgroundColor: "green", color: "white", margin: '0 8px 8px 0' }} />
        
    </Box>
    </>
  )
}

export default YourInterests