import React from 'react';
import "@fontsource/outfit";
import "./CreateEvent.css";
import { Link } from "react-router-dom";



import { useState } from 'react';

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [when, setWhen] = useState("");
  const [where, setWhere] = useState("");
  const [people, setPeople] = useState("");

  const handleCreate = async () => {
    //console.log("1");
    var loginToken = sessionStorage.getItem("AUTH_TOKEN");
    //console.log("2 " + loginToken);
    //const url = "http://localhost:3001/events";
    const url = "https://habby-backend.onrender.com/events";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + loginToken
      },

      body: JSON.stringify({
        Title: title,
        About: about,
        Date: when,
        Location: where,
        VisitorNumber: people
      })
    }
    try {
      const response = await fetch(url, requestOptions);
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
      console.log("Event Created Successfully");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class='form-wrapper' className='fit' style={{ fontFamily: "outfit" }}>
      <p>TITLE</p>
      <form class="formstyle">
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} class="inputline" />
      </form>

      <p>ABOUT</p>
      <form class="formstyle">
        <input type="text" value={about} onChange={e => setAbout(e.target.value)} class="inputline" />
      </form>

      <p>DATE</p>
      <form class="formstyle">
        <input type="text" value={when} onChange={e => setWhen(e.target.value)} class="inputline" />
      </form>

      <p>LOCATION</p>
      <form class="formstyle">
        <input type="text" value={where} onChange={e => setWhere(e.target.value)} class="inputline" />
      </form>

      <p>NUMBER OF VISITORS</p>
      <form class="formstyle">
        <input type="text" value={people} onChange={e => setPeople(e.target.value)} class="inputline" />
      </form>

      <p>PHOTOS</p>
      <div className="gray-rectangle"></div>
      <div className="white-rectangle">
        <div className="plus-sign">+</div>
      </div>
      <div className="line"></div>
      <Link to={{ pathname: `/` }}>
        <button className="create-event-button" onClick={handleCreate}>Create Event</button>
      </Link>
    </div >
  )
}

export default CreateEvent;