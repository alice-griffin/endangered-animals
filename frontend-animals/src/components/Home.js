import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Animals from '../components/Animals';
import Header from '../components/Header';

export default function Home() {

    const apiUrl = 'https://endangered-animals-api.herokuapp.com/endangered-animals';
    const [animals, setAnimal] = useState([]);

    useEffect(() => {
        axios.get(apiUrl).then(response => {
            setAnimal(response.data);
        })
    }, [apiUrl])


    return (
        <div>
            <Header />
            <Animals data={animals}/>
        </div>
    );
}
