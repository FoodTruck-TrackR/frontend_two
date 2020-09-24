import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Form from "./components/Form";
import Home from './components/home.js';
import Catering from './components/Catering.js';
import { Events } from  './components/Events'


export default function App() {
  return (
    <>
     
    
    <Router>
     
      
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Catering' component={Catering} />
        <Route path='/' component={Events} />
         <Route path='./Form' component={Form} /> 
      </Switch>
    </Router>
  </>
  )
  
}