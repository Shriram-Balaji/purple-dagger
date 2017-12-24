import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <header className="navbar rad-navbar">
        <section className="navbar-section">
          <a href="#" id="rad_icon" className="navbar-brand mr-2 rad-header">Rad Proton</a>
          <a href="https://github.com/Shriram-Balaji/rad-proton" className="btn btn-link">GitHub</a>
        </section>
      </header>             
    );
  };
}

export default Header