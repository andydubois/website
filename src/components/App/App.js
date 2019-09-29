import React, { Component } from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio"
import Navigation from "../Navigation/Navigation.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
        </Router>
      </div>
    );
  }
}

export default App;
