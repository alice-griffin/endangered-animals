import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
                    <div>
                        <img src={animal.image_url}></img>
                    </div>
                )
            })}
        </div>
    )
            }