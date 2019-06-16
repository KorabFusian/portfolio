import React from "react";
import "./styling/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <h4 id="text-logo">Ornella Friggit</h4>
      <nav id="Navbar">
        <Link to="/work">My work</Link>
        <Link to="/about">About me</Link>
        <Link to="/">Résumé</Link>
      </nav>
    </header>
  );
}

export default Header;
