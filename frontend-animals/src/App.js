import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
import About from './components/About';
import Home from './components/Home';
import Help from './components/Help';
import Details from './components/Details';

function App() {
  return (
  <Router>
<div className="App">
  <Switch>
    <Route exact={true} path="/" component={Home}></Route>
    <Route exact={true} path="/about" component={About}></Route>
    <Route exact={true} path="/help" component={Help}></Route>
    <Route exact={true} path="/details" component={Details}></Route>
    </Switch>
</div>
</Router>
  );
}

export default App;
