import React, { Component } from 'react';
import './Add.page.css';

class Add extends Component {

    
    AddPerson = () => {

        fetch(`http://localhost:53301/api/Actor`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.pName,
              born: this.pBorn,
              birthplace: this.bPLace,
              biography: this.bio,
              picture: this.pPic
            })
          })

          const actedIn = this.acted.split("\n").map( el => el.split(": "));
          actedIn.forEach( link => {
              console.log(link);
              fetch(`http://localhost:53301/api/Actor?actorName=${this.pName}&movieTitle=${link[0]}&role=${link[1]}`, {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    }
                  })
          })
    }
    AddSeries = () => {
        fetch(`http://localhost:53301/api/Series`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: this.sTitle,
              released: this.sRelese,
              genre: this.sGenre,
              tagline: this.sTagline,
              picture: this.sPic,
              rate: 0,
            })
          })
    }
    AddMovie = () => {
        fetch(`http://localhost:53301/api/Movie`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: this.mTitle,
              released: this.mRelese,
              genre: this.mGenre,
              tagline: this.mTagline,
              picture: this.mPic,
              trailer: this.mTrailer,
              rate: 0,
            })
          })
    }
    render() {

        let display = null;
        if(this.props.match.params.type === '1'){
            display = (<div className="add">
            <div className="card">
                <div><label>Name</label>{"  "}<input onChange={(event) => this.pName = event.target.value } maxLength="30"></input></div>
                <div><label>Picture</label>{"  "}<input onChange={(event) => this.pPic = event.target.value } ></input></div>
                <div><label>Birth Place</label>{"  "}<input onChange={(event) => this.bPLace = event.target.value} maxLength="30"></input></div>
                <div><label>Born</label>{"  "}<input type="number" onChange={(event) => this.pBorn = event.target.value} maxLength="30"></input></div>
                <div><label>Biography</label>{"  "}<textarea onChange={(event) => this.bio = event.target.value}  ></textarea></div>
                <div><label>Acted In</label>{"  "}<textarea onChange={(event) => this.acted = event.target.value} ></textarea></div>
                <button onClick={this.AddPerson}>Add</button>
            </div>
        </div>)
        }else if(this.props.match.params.type === '2'){
            display = ( 
                <div className="card">
                <div><label>Title</label>{"  "}<input onChange={(event) => this.sTitle = event.target.value } maxLength="50"></input></div>
                <div><label>Picture</label>{"  "}<input onChange={(event) => this.sPic = event.target.value } ></input></div>
                <div><label>Relese date</label>{"  "}<input type="number" onChange={(event) => this.sRelese = event.target.value} maxLength="30"></input></div>
                <div><label>Genre</label>{"  "}<input onChange={(event) => this.sGenre  = event.target.value} maxLength="50"></input></div>
                <div><label>Description</label>{"  "}<textarea onChange={(event) => this.sTagline = event.target.value}  ></textarea></div>
                <button onClick={this.AddSeries}>Add Series</button>
                </div>
            )
        }else {
            display = (
                <div className="card">
                <div><label>Title</label>{"  "}<input onChange={(event) => this.mTitle = event.target.value } maxLength="50"></input></div>
                <div><label>Picture</label>{"  "}<input onChange={(event) => this.mPic = event.target.value } ></input></div>
                <div><label>Trailer</label>{"  "}<input onChange={(event) => this.mTrailer = event.target.value } ></input></div>
                <div><label>Relese date</label>{"  "}<input type="number" onChange={(event) => this.mRelese = event.target.value} maxLength="30"></input></div>
                <div><label>Genre</label>{"  "}<input onChange={(event) => this.mGenre  = event.target.value} maxLength="50"></input></div>
                <div><label>Description</label>{"  "}<textarea onChange={(event) => this.mTagline = event.target.value}  ></textarea></div>
                <button onClick={this.AddMovie}>Add Movie</button>
                </div>
            )
        }
        return (
            <div className="add">
                {display}
            </div>
        )
    }
}


export default Add;