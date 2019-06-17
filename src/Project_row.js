import React from "react";
import "./styling/Project_row.css";
import { Link } from "react-router-dom"

function ProjectRow(props) {
  const {logo, project} = props
  return (
    <div className="project-card col s12 l3 m4">
      <img className="project-image" src={logo} alt={project.logo} />
      <Link to={project.link}>
        <h4>{project.title}</h4>
      </Link>
      <p>{project.shortDescription}</p>
    </div>
  );
}

export default ProjectRow;
