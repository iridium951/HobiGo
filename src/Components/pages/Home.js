import EventCard from "../EventCard";
import "@fontsource/outfit";
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import { useState } from "react";
import football from "./Images/Football.png";
import basketball from "./Images/Basketball.png";
import skateboard from "./Images/Skateboard.png";
import poker from "./Images/Poker.png";


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
    const url = `http://localhost:3001/events`;
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
  }

  fetchData();

  const images = [football, basketball, skateboard, poker]

  const reccards = events.map((data, index) =>
    <Link
      to={{ pathname: `/event/${data.id}` }}
      state={{ title: data.Title, about: data.About, date: data.Date, loc: data.Location, image: images[index], visnum: data.VisitorNumber }}
      key={index}
      style={{ color: "black", textDecoration: "none" }}
    >
      <EventCard
        data={data}
        image={images[index]}

      />

    </Link>
  )

  return (
    <>

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
