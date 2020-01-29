import React from "react";
import "../styling/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <Link to="/"><h4 id="text-logo">Jérémi Friggit</h4></Link>
      <nav id="Navbar">
        <Link to="/code">Mes projets</Link>
        <Link to="/vfx">Mes visuels</Link>
        <Link to="/about">Plus d'infos</Link>
        <Link to="/resume">CV</Link>
      </nav>
    </header>
  );
}

export default Header;
