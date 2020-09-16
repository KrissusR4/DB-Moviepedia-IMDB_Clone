import React from 'react';
import './Search.css';
const search = (props) => (

    <div className="search-bar">
        <select onChange={props.selectH}>
            <option value="1">Actor</option>
            <option value="2">Series</option>
            <option value="3">Movie</option>
        </select>
        <input onChange={props.changeH} onKeyDown={props.searchH}></input>
    </div>

 );

 export default search;
