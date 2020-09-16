import React from 'react';
import './Popular.css'
import { Route } from "react-router";

const popular = props => (
    <div className="popular">
        <div>
        <Route render={({ history}) => (
                        <img src={props.link[0].picture}
                            onClick={() => { 
                                props.click({...props.link[0], cast: []});
                                history.push('/film'); }}
                                
                            />
                            
                    )} />
        <Route render={({ history}) => (
                        <img src={props.link[1].picture}
                            onClick={() => { 
                                props.click({...props.link[1], cast: []});
                                history.push('/film'); }}
                                
                            />
                            
                    )} />
        <Route render={({ history}) => (
                        <img src={props.link[3].picture}
                            onClick={() => { 
                                props.click({...props.link[3], cast: []});
                                history.push('/film'); }}
                                
                            />
                            
                    )} />
        <Route render={({ history}) => (
                        <img src={props.link[2].picture}
                            onClick={() => { 
                                props.click({...props.link[2], cast: []});
                                history.push('/film'); }}
                                
                            />
                            
                    )} />
        <Route render={({ history}) => (
                        <img src={props.link[4].picture}
                            onClick={() => { 
                                props.click({...props.link[4], cast: []});
                                history.push('/film'); }}
                                
                            />
                            
                    )} />

        </div>
        <div>
        {/* <img src={props.link[4].picture} onClick={props.click.bind(this,props.link[4])}/> */}
        {/* <img src={props.link[6].picture}/>
        <img src={props.link[7].picture}/> */}
        </div>
    </div>
);

export default popular;