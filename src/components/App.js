import React from "react";
import "../styling/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { projectsList, images, resumeUrl } from "../assets/index";

// Components
import About from "./About.js";
import Footer from "./Footer";
import Header from "./Header.js";
import Home from "./Home.js";
import Projects from "./Projects";
import SingleProject from "./Single_project";
import Resume from "./Resume";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectsList, images, resumeUrl };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div id="content">
            <Switch>
              {this.state.projectsList.map((project, idx) => (
                <Route
                  key={project.title}
                  exact
                  path={`/${project.link}`}
                  render={props => <SingleProject idx={idx} {...this.state} />}
                />
              ))}
              <Route
                exact
                path="/code"
                render={props => <Projects {...this.state} />}
              />
              <Route
                exact
                path="/resume"
                render={props => <Resume resumeUrl={this.state.resumeUrl} />}
              />
              <Route
                exact
                path="/about"
                render={props => <About {...this.state} />}
              />
              <Route render={props => <Home {...this.state} />} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
