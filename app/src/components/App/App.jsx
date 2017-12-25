import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '~/routes/Home'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-exp.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import './app.css'

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container app-container">
        <Home />    
      </div>
    )

  };
};

export default App