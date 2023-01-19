import EventCard from "../EventCard"
import "@fontsource/outfit";
import { Link } from "react-router-dom"
import { Grid } from '@mui/material';
import { useEffect, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [done, setDone] = useState(false);
  var loginToken = sessionStorage.getItem("AUTH_TOKEN");
 // var loginId = sessionStorage.getItem("AUTH_ID");

  //useEffect(() => {
    const fetchData = async () => {
      if (done) {
        return;
      }
      const url = `http://localhost:3000/events`;
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + loginToken
        }
      };

      fetch(url, requestOptions)
      .then(response => {
        if (response.ok) {
          console.log("ok");
          response.json().then(data => {
            console.log("data: " + JSON.stringify(data));
            setEvents(data);
            setDone(true);
          });
        }
      })

      //const data = await response.json();
      //console.log("data: " + JSON.stringify(data));
      //setEvents(data);
    }

  fetchData();

  const schedulecard = events.map((data, index) =>

    <Link
      to={{ pathname: `/event/${data._id}` }}
      state={{ title: data.Title, about: data.About, date: data.Date, loc: data.Location, image: data.image }}
      key={index}
      style={{ color: "black", textDecoration: "none" }}
    >
      <EventCard
        data={data}
        image={data.image}
      />
    </Link>
  )

  const reccards = events.map((data, index) =>
    <Link
      to={{ pathname: `/event/${data.id}` }}
      state={{ title: data.Title, about: data.About, date: data.Date, loc: data.Location, image: data.Image }}
      key={index}
      style={{ color: "black", textDecoration: "none" }}
    >
      <EventCard
        data={data}
      />

    </Link>
  )

  //await fetchData();

  return (
      <>
      <Link
        to={{ pathname: `/schedule` }}
        style={{ color: "black", textDecoration: "none" }}
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
