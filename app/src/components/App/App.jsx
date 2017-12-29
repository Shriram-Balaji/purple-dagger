import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '~/routes/Home'
import 'bulma/css/bulma.css'
import './app.css'
class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="appContainer" className="fill-parent">
        <Home selected={0} />    
      </div>
    )

  };
};

export default App