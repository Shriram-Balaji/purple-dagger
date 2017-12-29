import React, { Component } from 'react'
import './sidebar.css'
import icons from '~/icons.services'

class Sidebar extends Component {
  constructor(props){
    super(props)
  }

  getImageSource(service){
    return icons[service]
  }

  listServiceIcons(props) {
    let services = props.services
    const listItems = (services).map((service, index) => {
      let id = `${service}Icon`
      let link = "#"+`${service}`
      let first = service.slice(0,1)
      let name = first.toUpperCase() + service.slice(1)
      return (
      <li key={service}>
       <a href={link} id={id} className="sidebar-icons"  onClick={this.props.onSelectTab.bind(this, index)}>
       <img src={this.getImageSource(service)} className="sidebar-icon" alt={service} />
              <p className="is-hidden-tablet service-name">{name}</p>
        </a>
      </li>
      );
    });
    return (
      <ul className="sidebar-icons-list">{listItems}</ul>
    );
  }

  render(){
    return(
          <div className="sidebar">
            <div id="sidebar-content">
              {this.listServiceIcons(this.props) }
            </div>
          </div>
    );
  };
};

export default Sidebar