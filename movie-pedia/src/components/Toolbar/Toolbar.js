import React, { Component } from 'react';

import './Toolbar.css';
import Search from "../SearchBar/SearchBar";
import{ withRouter } from "react-router-dom";
class Toolbar extends Component {
  
  sType = 1;

  AddHandler = () => {
    this.props.history.push(`/Add/${this.sType}`);
  }

  SearchTextHandler = (event) => {
    this.search = event.target.value;
   
  }
  SearchTypeHandler = (event) => {
    this.sType = event.target.value;
    
  }
  SearchHandler = (event) => {
    if(event.key === "Enter"){
      console.log(this.search);
      console.log(this.sType);
      this.props.searchH({search: this.search , type: this.sType});
      this.props.history.push('/search');
    }
  }

  render() {
    
    return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
          <div className="toolbar__logo"><a href="/">Movie Pedia</a></div>
          <Search searchH={this.SearchHandler}  changeH={this.SearchTextHandler} selectH={this.SearchTypeHandler}/>
          {/* <img src={require("../../assets/test4.png")}/> */}
          <div className="spacer" />
          <p onClick={this.AddHandler}>+</p>
          {/* <div className="toolbar_navigation-items">
              <ul>
                  <li><a href="/">Products</a></li>
                  <li><a href="/">Users</a></li>
              </ul>
          </div> */}
      </nav>
    </header>
    );
    }
}

export default withRouter(Toolbar);
