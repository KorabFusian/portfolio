import React from "react";
import "./styling/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Github: <a href="github.com/friggito">@friggito</a>{"    "}|{"    "}Linkedin:{" "}
        <a href="linkedin.com/okfriggit">/okfriggit</a>{"    "}|{"    "}Twitter:{" "}
        <a href="twitter.com/friggito">@friggito</a>
      </p>
    </footer>
  );
}

export default Footer;
