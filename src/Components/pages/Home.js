import EventCard from "../EventCard"
import "@fontsource/outfit";
import { Link } from "react-router-dom"
import { Grid } from '@mui/material';
import { useEffect, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState([]);
  var loginToken = sessionStorage.getItem("AUTH_TOKEN");
  var loginId = sessionStorage.getItem("AUTH_ID");

  useEffect(() => {
    const fetchData = async () => {
        const url = `http://localhost:3000/events/${loginId}`;
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + loginToken
            }
        };
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        setEvents(data);
    }
    fetchData();
}, [loginToken, loginId]);


  

  const schedulecard = events.map((data, index) =>
  
  <Link 
    to={{pathname: `/event/${data._id}`}}
    state={{title: data.Title, about: data.About, date: data.Date, loc: data.Location, image: data.image}}
    key={index}
    style={{color: "black", textDecoration: "none"}}
  >
    <EventCard
      data={data} 
      image={data.image}
  />
  </Link>
)

  const reccards = events.map((data, index) =>
  <Link 
    to={{pathname: `/event/${data.id}`}}
    state={{title: data.Title, about: data.About, date: data.Date, loc: data.Location, image: data.Image}}
    key={index}
    style={{color: "black", textDecoration: "none"}}
  >
    <EventCard
      data={data} 
    />
    
  </Link>
  )


  return (
    <>
    <Link 
      to={{pathname: `/schedule`}}
      style= {{color: "black", textDecoration:"none"}}
    >
    <div className="interests" style={{ fontFamily: "outfit" }}> 
          Your Schedule 
    </div>
    </Link>
    {schedulecard}
    <div className="interests" style={{ fontFamily: "outfit" }}> 
          Near You 
    </div>
    
    <Grid container spacing={12} >      
    <Grid item xs={12}>
        <Grid >
        {reccards}
        </Grid>
      </Grid>
    </Grid>
   
    
    
    </>

    
  )
}
