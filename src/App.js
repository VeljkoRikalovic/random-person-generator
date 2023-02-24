import "./App.css";
import React, { useState } from "react";

function App() {
  const [info, setInfo] = useState([]);

  async function add() {
    const responce = await fetch("https://randomuser.me/api/");
    const data = await responce.json();
    setInfo(data.results);
  }

  const information = info.map((props) => {
    return (
      <div className="okvir" key={props.id.value}>
        <div>
          <img src={props.picture.large}></img>
        </div>
        <div>
          <h2>{props.name.first + " " + props.name.last}</h2>
        </div>
        <div className="dole">
          <div className="info">
            <p>{"Gender: " + props.gender}</p>
          </div>
          <div className="info">
            <p>{"Age: " + props.dob.age}</p>
          </div>
          <div className="info">
            <p>{"Country: " + props.location.country}</p>
          </div>
          <div className="info">
            <p>{" City: " + props.location.city}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Random person generator</h1>
      {information}
      <button className="button-77" role="button" onClick={add}>
        Generate random person
      </button>
    </div>
  );
}

export default App;
