import React from 'react'


import { useLocation } from 'react-router-dom'

function Event() {
    const location = useLocation();
    const { image, id, about} = location.state;
  return (
    <div>
  
    <p>{about}</p>
    <p>Event Id: {id}</p>
    </div>
  )
}

export default Event
