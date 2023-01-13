import React from 'react'
import "@fontsource/outfit";
import "./CreateEvent.css"


function CreateEvent() {
  return (
    <div class='form-wrapper' className='fit' style={{ fontFamily: "outfit" }}>
      <p>TITLE</p >
      <form class="formstyle">
        <input type="text" id="input-field" name="input-field" class="inputline"/>
      </form>

      <p>ABOUT</p>
      <form class="formstyle">
        <input type="text" id="input-field" name="input-field" class="inputline"/>
      </form>

      <p>WHEN?</p>
      <form class="formstyle">
        <input type="text" id="input-field" name="input-field" class="inputline"/>
      </form>

      <p>WHERE?</p>
      <form class="formstyle">
        <input type="text" id="input-field" name="input-field" class="inputline"/>
      </form>

      <p>FOR HOW MANY PEOPLE?</p>
      <form class="formstyle">
        <input type="text" id="input-field" name="input-field" class="inputline"/>
      </form>

      <p>PHOTOS</p>
      <div className="gray-rectangle"></div>
      <div className="white-rectangle">
        <div className="plus-sign">+</div>
      </div>
      <div className="line"></div>
      
      <button className="create-event-button">Create Event</button>

    </div>
    
  )
}

export default CreateEvent