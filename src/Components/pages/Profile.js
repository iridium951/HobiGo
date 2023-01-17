import "@fontsource/outfit";
import YourInterests from "../YourInterests";
import YourLocation from "../YourLocation";
import "./Profile.css"
import { Avatar, Box } from '@mui/material';
import { useState } from 'react';



export default function Profile() {

  const [Name, setName] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');

  const readProfile = async () => {
    console.log("1");
    const url = "http://localhost:3000/users/" + id
    const requestOptions = {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        'Authorization': 'Basic '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pa2l0YUBuaWtpdGEuZGUiLCJpYXQiOjE2NzM5NzQ5ODJ9.e9S-wcdDSavc8pseyTFdseAAxqvcgesnxXxmIPSV0rw' 
    },
      //body: JSON.stringify({ Name: Name, EmailAddress: EmailAddress })
    }
    fetch(url, requestOptions)
      .then(response => {
        console.log(JSON.stringify({ Name: Name, EmailAddress: EmailAddress }));
        console.log(response.status);
        console.log(response.data);
        if (response.ok) {
          console.log("ok");
        }
      })
      .then(data => console.log(data));
  }

     
  readProfile(); 


  return (
    <>
      <Box justifyContent="center" alignItems="center" display="flex" margin="1rem">
        <Avatar shape="circle" style={{ width: 100, height: 100 }} />
      </Box>

      <div className="name" style={{ fontFamily: "outfit" }}>
        {Name}
      </div>

      <div className="email" style={{ fontFamily: "outfit" }}>
        {EmailAddress}
      </div>

      <YourInterests />

      <YourLocation />


    </>
  )
}
