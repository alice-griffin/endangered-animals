import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Animals.css';
import { Link } from 'react-router-dom';



export default function Animals() {

    const apiUrl = 'https://endangered-animals-api.herokuapp.com/endangered-animals';
    const [animals, setAnimal] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then(response => {
            setAnimal(response.data);
            console.log(response.data);
        })
    }, [apiUrl])

    return (
        <div>
            {animals.map(animal => {
                return (
                    <div key={animal.id}>
                        <div className="content-wrapper">
                            <img alt="animal" src={animal.image_url}></img>
                            <Link to={{pathname: "/details", state: {animals}}}><div className="text-wrapper"><h4>{animal.name}</h4></div></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}