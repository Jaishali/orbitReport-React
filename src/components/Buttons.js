//import React  from 'react';
import satData from "./satData";
import './styling.css'


const Buttons =  ({ filterByType, setSat, displaySats})=>{
  //let filterByType = ""
  //let setSat = ""
  //let displaySats = "";

   let button = displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  });
  let button1 = <div>
    {button}
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
      return button1;
  
}

export default Buttons;