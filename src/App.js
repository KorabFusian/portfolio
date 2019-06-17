import React from "react";
import "./styling/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { projectsList } from "./assets/index";

// Components
import About from "./About.js";
import Footer from "./Footer";
import Header from "./Header.js";
import Home from "./Home.js";
import Projects from "./Projects";
import SingleProject from "./Single_project";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectsList };
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
                  exact path={`/${project.link}`}
                  render={props => {
                    const prev = this.state.projectsList[idx - 1]
                    const next = this.state.projectsList[idx + 1]
                    return (
                      <SingleProject
                        {...project}
                        prev={prev && prev.link}
                        next={next && next.link}
                      />
                    );
                  }}
                />
              ))}
              <Route exact path="/portfolio" render={props => <Projects {...this.state} />} />
              <Route exact path="/about" component={About} />
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
