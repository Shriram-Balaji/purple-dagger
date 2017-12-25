import React, { Component } from 'react'
import './primary-content.css'

class PrimaryContent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="primary-content">
          <h4 className="content-title"> {this.props.title} </h4>
      </div> 
    )
  }
}

export default PrimaryContent