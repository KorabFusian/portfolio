import React from "react";
import Projects from "./Projects.js";
import {projectsList} from "./assets/index";
import Intro from "./Intro.js";

function Content() {
  return (
    <div>
    <Intro />
      <Projects projects={projectsList} />
    </div>
  );
}

export default Content;
