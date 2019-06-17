import React from "react";
import "./styling/Single_project.css";
import { Link } from "react-router-dom";

function SingleProject(props) {
  return (
    <div className="row single-proj-container">
      <div className="single-proj-data">
        <img className="single-proj-img" src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4>Technologies used:</h4>
        {props.technologies.map(tech => (
          <p key={tech}>
            <i className="material-icons">build</i>
            {"  "}
            {tech}
          </p>
        ))}
        <button className="btn-large black">Visit {props.title} Website</button>
      </div>
      <div className="arrow-container">
        <div className="nav-arrow">
          {props.prev ? (
            <Link to={`/${props.prev}`}>
              <i className="material-icons large">navigate_before</i>
            </Link>
          ) : (
            <i className="material-icons large transparent">navigate_before</i>
          )}
        </div>
        <div className="nav-arrow">
          {props.next ? (
            <Link to={`/${props.next}`}>
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
