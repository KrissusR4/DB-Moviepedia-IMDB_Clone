
import React, { Component } from 'react';
import './Search.page.css';
import{ withRouter } from "react-router-dom";
class search extends Component {


    ItemClick = (item) => {
        
        this.props.clickH(item);
        this.props.history.push('/film');
    }

    render() {

          let resoults = this.props.res.map( article => <div key={article.name} onClick={this.ItemClick.bind(this,article)}> <img src={article.picture}/> <p>{article.name}</p> </div>);
      
          return (
          <div className="search-resoults">
              {resoults}
          </div>
        );
      }
}


export default withRouter(search);