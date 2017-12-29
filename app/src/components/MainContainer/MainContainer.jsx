import React, { Component } from 'react'
import Sidebar from '~/components/Sidebar'
import './main-container.css'

{/*
   MainContainer holds the Sidebar, and the logic for the tab switching
*/}

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {selected: props.selected}
  }

  render(){
    return(
    <div id="contentContainer" className="container is-fluid">
      {this.props.children[this.props.selected]}
    </div>
    );
  };

};

export default MainContainer