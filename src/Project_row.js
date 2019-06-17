import React from "react";
import "./styling/Project_row.css";
import { Link } from "react-router-dom"

function ProjectRow({ props }) {
  return (
    <div className="project-card col s12 l4 m6">
      <img className="project-image" src={props.image} />
      <Link to={props.link}>
        <h4>{props.title}</h4>
      </Link>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectRow;
