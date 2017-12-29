import React, { Component } from 'react'
import './card.css'
import { UserIcon, EyeIcon } from '~/icons.inline'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  getServiceName(props){
    console.log(props)
    let serviceName = props.type;
    return serviceName
  }

  openLink(event){
    event.preventDefault();
    window.open(this.props.link);
  }

  _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  render(){
    return(
    <div className="column" onClick={this.openLink.bind(this)}>  
        <div className="card rad-card">
          <div className="card-image">
              <figure className="image is-4by3">
                <img src={this.props.image} className="img-responsive" />
                <header className="card-header rad-overlay">
            <p className="card-header-title is-size-5 is-centered"> {this.props.header} </p>
               </header>
              </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <span className={`rad-chip no-background border-red ${this.getServiceName(this.props)}`}>
                <a href={this.props.user.html_url} className="link"><UserIcon fill="white" stroke="white" className="avatar"/>
                 {this._capitalize(this.props.user.name)}</a>
              </span>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default Card;