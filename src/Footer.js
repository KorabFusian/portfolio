import React from "react";
import "./styling/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Github:{" "}
        <a
          href="http://github.com/friggito"
          target="_blank"
          rel="noopener noreferrer"
        >
          @friggito
        </a>
        {"    "}|{"    "}Linkedin:{" "}
        <a
          href="http://linkedin.com/in/friggito"
          target="_blank"
          rel="noopener noreferrer"
        >
          /friggito
        </a>
        {"    "}|{"    "}Twitter:{" "}
        <a
          href="http://twitter.com/friggito"
          target="_blank"
          rel="noopener noreferrer"
        >
          @friggito
        </a>
      </p>
      <p>
        <a href="mailto:ornella.friggit@gmail.com">ornella.friggit@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;
