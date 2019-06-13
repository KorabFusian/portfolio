import React from "react";
import ProjectRow from "./Project_row";

function Projects(props) {
  return (
    <div>
      {props.projects.map(project => (
        <ProjectRow props={project} key={project.title} />
      ))}
    </div>
  );
}

export default Projects;
