import "@fontsource/outfit";
import YourInterests from "../YourInterests";
import YourLocation from "../YourLocation";
import "./Profile.css"
import { Avatar, Box } from '@mui/material';



export default function Profile() {
  return (
    <>
    <Box justifyContent="center" alignItems="center" display="flex" margin="1rem">
      <Avatar shape="circle" style={{ width: 100, height: 100 }} /> 
    </Box>

    <div className="name" style={{fontFamily: "outfit"}}>
      Maxi Musti
    </div>

    <div className="email" style={{fontFamily: "outfit"}}>
      maximusti@email.com
    </div>

    <YourInterests />

    <YourLocation />

  
  </>
  )
}
