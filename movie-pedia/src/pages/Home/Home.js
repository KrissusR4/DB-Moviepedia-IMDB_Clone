import React, { Component } from 'react';
import './Home.css';

import Toolbar from '../../components/Toolbar/Toolbar';
import Popular from '../../components/popular/Popular';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Search from '../Search/Search.page';
import Film from '../Film/Film.page';
import Add from '../Add/Add.page';
import createHistory from 'history/createBrowserHistory'
class Home extends Component {

    componentDidMount() {

        const date = new Date();

        fetch(`http://localhost:53301/api/Movie?released=2000&count=7`)
        .then(res => res.json())
        // .then( movies => console.log(movies))
        .then( movies => this.setState( prevState => {return {popMovies: [...movies]}}))

        fetch(`http://localhost:53301/api/Series?released=2000&count=7`)
        .then(res => res.json())
        // .then( movies => console.log(movies))
        .then( series => this.setState( prevState => {return {popSeries: [...series]}}))

        
    }

    constructor(props) {
        super(props)

        this.SItemClick = this.SItemClick.bind(this);
      }
    state = {
        popMovies: [ {picture: null}, {picture: null} , {picture: null}, {picture: null}, {picture: null}, {picture: null}, {picture: null}, {picture: null}],
        popSeries: [ {picture: null}, {picture: null} , {picture: null}, {picture: null}, {picture: null}, {picture: null}, {picture: null}, {picture: null}],
        searchType: "2",
        search: [
            {name: "Forest gump", picture: "https://upload.wikimedia.org/wikipedia/sr/thumb/9/95/Forrest_Gump_DVD.jpg/250px-Forrest_Gump_DVD.jpg"},
            {name: "Avengers", picture: "https://www.nme.com/wp-content/uploads/2019/04/Payoff_1-Sht_Online_v6_Domestic_Sm-1-e1552570783683-696x477.jpg"},
            // {name: "Avengers" picture: ""},
        ],
        movie: {
            title: "Avengers",
            picture: "https://www.nme.com/wp-content/uploads/2019/04/Payoff_1-Sht_Online_v6_Domestic_Sm-1-e1552570783683-696x477.jpg",
            rate: "6.5",
            zanra : "comedy/action/thriler",
            cast : [],
            director: "Ljubisa",
            cast: [
                {name: 'milos' , role: 'lelemud' , picture: "https://upload.wikimedia.org/wikipedia/sr/thumb/9/95/Forrest_Gump_DVD.jpg/250px-Forrest_Gump_DVD.jpg"},
                {name: 'milos' , role: 'lelemud' , picture: "https://upload.wikimedia.org/wikipedia/sr/thumb/9/95/Forrest_Gump_DVD.jpg/250px-Forrest_Gump_DVD.jpg"},
        ]
        }
    }
    SItemClick = (movie) => {


        console.log(this.state.searchType);
        this.setState( prevState => { return {movie : movie}});
        if(this.state.searchType === '3' || this.state.searchType === '2'){
            fetch(`http://localhost:53301/api/Actor?movieOrSeriesTitle=${movie.title}`)
            .then( res => res.json())
            .then( roles => this.setState( prevState => { return {movie: {...prevState.movie , cast: [...roles]}}}))
        }else{
            fetch(`http://localhost:53301/api/Movie?aName=${movie.name}`)
            .then( res => res.json())
            .then( roles => this.setState( prevState => { 
                return {movie: { ...prevState.movie , cast: [...roles.map( role => { return {...role , name: role.title }})] }}}))
        }

    }
    SearchHeandler = (search) => {
        console.log(this.state.search, "vraceno");
        console.log(search, "trazi se");
        this.setState( prevState => { return {searchType: search.type}})
        if(search.type == 1){
            fetch(`http://localhost:53301/api/Actor?name=${search.search}`)
            .then(res => res.json())
            .then(person => this.setState( prevState => { return {search : [...person.map( per => { return { ...per , cast: []}}) ] }}))
        }else if( search.type == 3){
            fetch(`http://localhost:53301/api/Movie?movieTitle=${search.search}`)
            .then(res => res.json())
            .then(movie => this.setState( prevState => { return {search : [...movie.map( mov => { return { ...mov , name:mov.title, cast: [] } })] }}))
        }else{
            fetch(`http://localhost:53301/api/Series?seriesTitle=${search.search}`)
            .then(res => res.json())
            .then(series => this.setState( prevState => { return {search : [...series.map( ser => { return { ...ser , name:ser.title, cast: []}})]}}))
        }
        console.log(this.state.searchType);
    }
    CastClickHandler = (movie) => {
        if(this.state.searchType === '3'){
            this.setState( prevState => { return {searchType: '3'}})
            fetch(`http://localhost:53301/api/Movie?mTitle=${movie.name}`)
            .then( res => res.json())
            .then(movie => this.setState( () => { return {movie: {...movie , cast: []}}}))
        }else if(this.state.searchType === '2'){
            
            fetch(`http://localhost:53301/api/Movie?actorName=${movie.name}`)
            .then( res => res.json())
            .then(moviee => {
                this.SItemClick(moviee);
                this.setState( prevState => { return {searchType: '1'}})
                })
        }else{
            this.setState( prevState => { return {searchType: '2'}})
            fetch(`http://localhost:53301/api/Movie?sTitle=${movie.name}`)
            .then( res => res.json())
            .then(movie => this.setState( () => { return {movie: {...movie , cast: []}}}))
        }
        
    }
    PopHandler = (movie) => {
        console.log(movie, 'filmicc');
        this.props.history.push('/film');
        this.setState( prevState => { return {searchType: '2'}})
        this.setState( prevState => { return {movie: movie }})
       this.SItemClick(movie);
    }
    render() {
        return (
            <div className="Home">
            {/* <Toolbar searchH={this.SearchHeandler}></Toolbar> */}
            <Router >
            <Route path={"/"} render={ (props) => <Toolbar searchH={this.SearchHeandler}></Toolbar>} />
            <Route exact path={"/"} render={ (props) => <Popular click={this.PopHandler} link={this.state.popSeries}></Popular>} />
            <Route path={"/search"} render={ (props) => <Search clickH={this.SItemClick} res={this.state.search}/>} />
            <Route path={"/film"} render={ (props) => <Film castClickHandler={this.CastClickHandler} movie={this.state.movie} isFilm={this.state.searchType}/>} />
            <Route path={"/Add/:type"} render={ (props) => <Add {...props}/>} />
           
            </Router>

            </div>
        );
    }
}

export default Home;
