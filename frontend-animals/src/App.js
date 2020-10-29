import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import About from './components/About';
import Home from './components/Home';
import Help from './components/Help';
import Details from './components/Details';

function App() {

  const apiUrl = 'https://endangered-animals-api.herokuapp.com/endangered-animals';
  const [animals, setAnimal] = useState([]);

  useEffect(() => {
      axios.get(apiUrl).then(response => {
          setAnimal(response.data);
          console.log(response.data)
      })
  }, [apiUrl])

  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" component={() => <Home data={animals}/>}/>
          <Route exact={true} path="/about" component={About}></Route>
          <Route exact={true} path="/help" component={Help}></Route>
          <Route exact={true} path="/details" component={Details}></Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
