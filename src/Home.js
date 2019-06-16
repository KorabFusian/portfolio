import React from "react";
import Projects from "./Projects.js";
import Intro from "./Intro.js";

function Home(props) {
  return (
    <div>
      <Intro />
      <Projects projects={props.projectsList || []} />
    </div>
  );
}

export default Home;
