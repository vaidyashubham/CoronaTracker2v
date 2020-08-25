import React from 'react'
import "./Habits.css"

function Habits() {
  return (
    <div className="container">
      <div className="box">
        <div className="content">
          <img src={require("./images/cold.png")} />
          <p>Be mindful of your coughs and sneezes.</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={require(`./images/cooking.png`)} />
          <p>Make cooking and eating a fun and meaningful part of your family routine.</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={require("./images/fever.png")} />
          <p>Look after your mental and physical health with daily physical and relaxation exercises.</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={require('./images/first-aid-kit.png')} />
          <p>Give early treatment.</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={require("./images/flight.png")} />
          <p>It is not the time to take a summer vacation: Avoid unnecessary travelling.</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={require("./images/washing-hand.png")} />
          <p>Washing and sanitizing your hands is very important.</p>
        </div>
      </div>
      <div className="box">
        <div className="content">
          <img src={require("./images/medical-mask.png")} />
          <p>Wear face-cover or face mask while stepping out.</p>
        </div>
      </div>
    </div>

  )
}

export default Habits
