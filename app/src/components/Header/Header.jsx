import React, { Component } from 'react';
import './header.css'
import icons from '~/icons.services'

class Header extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <header className="navbar rad-navbar">
        <section className="navbar-section">
          <a href="#" id="rad_icon" className="rad-header is-size-2 is-size-3-mobile">{this.props.logo}</a>
          <span id="nightMode"></span>
        </section>
      </header>             
    );
  };
}

export default Header