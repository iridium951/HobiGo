import "@fontsource/outfit";
import YourInterests from "../YourInterests";
import YourLocation from "../YourLocation";
import "./Profile.css";
import { Avatar, Box } from '@mui/material';
import { useState } from 'react';
import pp from "./Images/pp.png";



export default function Profile() {

  const [Name, setName] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');

  const readProfile = async () => {
    //console.log("1");
    var loginToken = sessionStorage.getItem("AUTH_TOKEN");
    var loginId = sessionStorage.getItem("AUTH_ID");
    //console.log("2 " + loginToken);
    const url = "http://localhost:3001/users/" + loginId;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + loginToken
      },
    }
    fetch(url, requestOptions)
      .then(response => {
        console.log(JSON.stringify({ Name: Name, EmailAddress: EmailAddress }));
        console.log(response.status);
        if (response.ok) {
          console.log("ok");
          response.json().then(data => {
            console.log(JSON.stringify(data));
            setName(data[0].Name);
            setEmailAddress(data[0].EmailAddress);
          });
        }
      })
  }


  readProfile();


  return (
    <>
      <Box justifyContent="center" alignItems="center" display="flex" margin="1rem">
        <Avatar src={pp} alt="profile pic" shape="circle" style={{ width: 100, height: 100 }} />
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
