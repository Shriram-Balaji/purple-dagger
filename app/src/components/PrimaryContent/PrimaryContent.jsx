import React, { Component } from 'react'
import './primary-content.css'
import config from '~/config'
import GenericCard from '~/components/Cards/GenericCard'
import SplCard from '~/components/Cards/SplCard'

class PrimaryContent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="primary-content">
          <h4 className="content-title"> {this.props.title} </h4>
          <div id="cardContainer" className="columns">
            <h4> PrimaryContent </h4>
          </div>
      </div> 
    )
  }

}

export default PrimaryContent