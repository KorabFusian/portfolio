import React from "react";
import { Link } from "react-router-dom";
import "../styling/Intro.css";

function Intro() {
  return (
    <div id="Intro-row">
      <p>Hi! I'm a full-stack developer.</p>
      <Link to="/portfolio" className="cta">See my work</Link>
    </div>
  );
}

export default Intro;
