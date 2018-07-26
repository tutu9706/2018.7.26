import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink } from 'react-router-dom';
import Agent from './view/agent/Agent.js';
import './app.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <img className="logo" src={require("./common/images/logo.png")} alt="logo"/> 
          </div>
          <div className="content clear">
              <div className="content_list fl">
                  <ul className="content_nav">
                      <li><NavLink to="/dashboard" activeClassName="onclickStatus">DASHBOARD</NavLink></li>
                      <li><NavLink to="/agent" activeClassName="onclickStatus">AGENT</NavLink></li>
                      <li><NavLink to="/mycruisf" activeClassName="onclickStatus">MYCRUISF</NavLink></li>
                      <li><NavLink to="/help" activeClassName="onclickStatus">HELP</NavLink></li>
                  </ul>
                  
              </div>
              <Route exact path="/" component={Agent}></Route>
              <Route exact path="/agent" component={Agent}></Route>
          </div>
          
          {/* <Route exact path="/home" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route> */}
          
        </div>
      </Router>
      
    );
  }
}

export default App;
