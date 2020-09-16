import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home/Home';
class App extends Component {

  homeNavH = () => {
    this.props.history.push('/film');
  }
  render() {
  return (
    <div className="App">
      <Router >
      <Route path={"/"} render={ (props) => <Home nav={this.homeNavH} {...props}></Home>} />
      </Router>
        
    </div>
  );
  }
}

export default App;
