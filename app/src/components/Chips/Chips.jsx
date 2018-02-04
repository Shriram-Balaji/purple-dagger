import React, { Component } from 'react'
import './chips.css'

class Chips extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return({
      <span className={`chips ${this.props.colors['detail-one']}-chip`}>
        <a href={this.props.detailOneLink} className="link">
          {this.renderIcon(this.props.meta['detail-one'])}
          {this.props.detailOne}</a>
      </span>
    })
  }
}

export default Chips