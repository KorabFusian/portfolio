import React from "react";
import "../styling/Single_project.css";
import { Link } from "react-router-dom";

function SingleProject(props) {
  const project = props.projectsList[props.idx];
  const logo = props.images[project.logo];
  const prev = props.projectsList[props.idx - 1];
  const next = props.projectsList[props.idx + 1];
  return (
    <div className="row single-proj-container">
      <div className="single-proj-data">
        <img className="single-proj-img" src={logo} alt={project.logo} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <h4>Technologies utilisées:</h4>
        {project.technologies.map(tech => (
          <p key={tech}>
            <i className="material-icons">build</i>
            {"  "}
            {tech}
          </p>
        ))}
        {project.projectUrl && (
        <a href={project.projectUrl} className="cta" target="_blank" rel="noopener noreferrer">
          Visit {project.title} Website
        </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className="cta" target="_blank" rel="noopener noreferrer">
            Voir le code de {project.title} sur Github
          </a>
        )}
        {project.gitlabUrl && (
          <a href={project.gitlabUrl} className="cta" target="_blank" rel="noopener noreferrer">
            Voir le code de {project.title} sur Gitlab
          </a>
        )}
      </div>
      <div className="arrow-container">
        <div className="nav-arrow">
          {prev ? (
            <Link to={`/${prev.link}`}>
              <i className="material-icons large">navigate_before</i>
            </Link>
          ) : (
            <i className="material-icons large transparent">navigate_before</i>
          )}
        </div>
        <div className="nav-arrow">
          {next ? (
            <Link to={`/${next.link}`}>
              <i className="material-icons large">navigate_next</i>
            </Link>
          ) : (
            <i className="material-icons large transparent">navigate_next</i>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
