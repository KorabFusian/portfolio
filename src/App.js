import React from "react";
import "./styling/App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import About from "./About.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { projectsList } from "./assets/index";

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {projectsList}
  }
  render (){
    return (
      <Router>
        <div className="App">
          <Header />
          <div id="content">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route render={(props) => <Home {...this.state} />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
