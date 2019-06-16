import React from "react";
import ProjectRow from "./Project_row";

function Projects(props) {
  return (
    <div className="row">
    <h3>Recent projects</h3>
      {props.projects.map(project => (
        <ProjectRow props={project} key={project.title} />
      ))}
    </div>
  );
}

export default Projects;
