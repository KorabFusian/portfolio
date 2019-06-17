import React from "react";
import {Link} from "react-router-dom";
import "./styling/Intro.css";

function Intro() {
  return (
    <div className="typewriter row" id="Intro-row">
      <p>Hi! I'm a full-stack developer.</p>
      <div>
        <Link to="/portfolio"><button>See my work</button></Link>
      </div>
    </div>
  );
}

export default Intro;
