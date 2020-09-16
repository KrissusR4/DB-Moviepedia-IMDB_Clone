import './ItemList.css';
import React from 'react';

import Avatar from '../Avatar/Avatar';
const itemList = props => { 
    
    let listClass = 'list';
    if (props.show) {
        listClass = 'list open';
    }
    let list;
    if(!props.avatar)
    {
    list = props.list.map(element => <p  onClick={() => props.clickHandler(element.name)} className="item" key={element.role}>{element.name} &nbsp; &nbsp; &nbsp; &nbsp; as {element.role}</p>);
    }else {
    list = props.list.map(element => { 
    return (
    <div onWheel={props.drag} className="item-con">
      <Avatar link={element.picture} size="small"></Avatar>
    <p  onMouseDown={props.drag} onClick={ () => props.clickHandler(element)}  key={element.role}>{element.name}  &nbsp; &nbsp; &nbsp; &nbsp; as  &nbsp; {element.role} </p>
    </div>
    )});
    }
    return(
      <div className="item-list">
        <p onClick={props.expand}  onContextMenu={props.drag}  >{props.name}</p>
        <div className={listClass}>
            {list} 
            {props.children}
        </div>
      </div>  
    )};


export default itemList