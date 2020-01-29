import React from "react";
import "../styling/Footer.css";

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        Github:{" "}
        <a
          href="http://github.com/KorabFusian"
          target="_blank"
          rel="noopener noreferrer"
        >
          @KorabFusian
        </a>
        {"    "}|{"    "}Linkedin:{" "}
        <a
          href="http://linkedin.com/in/jeremi-friggit"
          target="_blank"
          rel="noopener noreferrer"
        >
          in/jeremi-friggit
        </a>
        
      </p>
      <p>
        <a href="mailto:jeremifk@gmail.com">jeremifk@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;
