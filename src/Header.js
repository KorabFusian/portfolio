import React from "react";
import "./Header.css"

function Header() {
  return (
    <header className="App-header">
      <h4 id="text-logo">Ornella Friggit</h4>
      <nav id="Navbar">
          <a href="/">My work</a>
          <a href="/">About me</a>
          <a href="/">Résumé</a>
      </nav>
    </header>
  );
}

export default Header;
