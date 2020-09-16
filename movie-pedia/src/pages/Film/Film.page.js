import React, { Component } from 'react';
import './Film.page.css';

import ItemList from '../../components/ItemList/ItemList';
class Film extends Component {

  state = {
    castOpen : false,

  }
  
  CastToggle = () => {
    this.setState((prevState) => {
      return {castOpen: !prevState.castOpen};
    });
  }
 
  render() {

  let trailer = null;
  let description = null;
  let castLsit = null;
  let actedList = null;
  let bio = null;

  if(this.props.isFilm === '3' || this.props.isFilm === '2' ) {
    description =   <div><p>Description:</p><p>{" "+ this.props.movie.tagline}</p></div>
    castLsit = <ItemList show={this.state.castOpen} avatar={true}  list={this.props.movie.cast} name="Cast" expand={this.CastToggle} clickHandler={this.props.castClickHandler}/>
  }
  if(this.props.isFilm === '3'){
    trailer = (
    <div>
      <p>Trailer</p>
      <iframe width="1189" height="480" src={this.props.movie.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>  
    )
  } 
  if(this.props.isFilm === '1'){
    bio = <div><p>Biography:</p><p>{" "+ this.props.movie.biography}</p></div>
    actedList = <ItemList show={this.state.castOpen} avatar={false}  list={this.props.movie.cast} name="Acted In" expand={this.CastToggle} clickHandler={this.props.castClickHandler}/>
  }
  return (
    <div className="film-page">
    <img className="film-picture" src={this.props.movie.picture}/>
      <div className="film-header">
        <div >
        <p>{this.props.movie.title !== undefined ? this.props.movie.title : this.props.movie.name}  </p>
            <p className="rating">{this.props.movie.rate !== undefined ? `${this.props.movie.rate} / 10` : null }</p>
        </div>
        <p>{this.props.movie.released !== undefined ? `(${this.props.movie.released})` :  `born in: ${this.props.movie.birthplace} , ${this.props.movie.born}`}</p>
        <p>{this.props.movie.genre}</p>
      </div>
      <main>
        {description}
        {bio}
        {trailer}
        {castLsit}
        {actedList}
      </main>
    </div>
  );
  }
}

export default Film;
