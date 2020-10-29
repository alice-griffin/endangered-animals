import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Animals.css';
import Details from './Details';
import { Link } from 'react-router-dom';

export default function Animals(props) {

    return (
        <div>
            {props.data.map(animal => {
                return (
                    <div>
                        <div className="content-wrapper">
                            <img alt="animal" src={animal.image_url}></img>
                            <Link to={{pathname: "/details", details: animal.description}} key={animal.id} data={props.data}><div className="text-wrapper"><h4>{animal.name}</h4></div></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}