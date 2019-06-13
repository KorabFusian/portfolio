import React from "react";
import "./App.css";
import Header from "./Header.js";
import Content from "./Projects.js";
import {projectsList} from "./assets/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Content projects={projectsList} />
    </div>
  );
}

export default App;
