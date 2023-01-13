import EventCard from "../EventCard"
import "@fontsource/outfit";
import { Link } from "react-router-dom"
import { Grid } from '@mui/material';


export default function Home() {
  const db = [{title:"Basketball", about:"Classic Pick Up Game",id:"1"}];
  const db2 = [{title:"Football", about:"Football Match",id:"1"}, {title:"Magic Show", about:"It's a fucking magic show",id:"2"}, {title:"Book Club", about:"Are you a nerd? ",id:"2"}, {title:"F___ C___", about:"We Don't talk about it",id:"2"} ];

  const schedulecard = db.map((data, index) =>
  <Link 
    to={{pathname: `/event/${data.id}`}}
    state={{title: data.title, about: data.about, id: data.id, image: data.image}}
    key={index}
    style={{color: "black", textDecoration: "none"}}
  >
    <EventCard
      data={data} 
      image={data.image}
    />
  </Link>
  )
  const reccards = db2.map((data, index) =>
  <Link 
    to={{pathname: `/event/${data.id}`}}
    state={{title: data.title, about: data.about, id: data.id, image: data.image}}
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
          Recommended for You 
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
