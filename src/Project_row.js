import React from "react";
import "./styling/Project_row.css"

function ProjectRow({ props }) {
  return (
    <div className="project-card col s12 l4 m6">
        <img className="project-image" src={props.image} />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectRow;
