import React, { Component } from 'react'
import './sidebar.css'
import icons from '~/icons.assets'

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
      return (
      <li key={service}>
       <a href={link} id={id} className="sidebar-icon-container"  onClick={this.props.onSelectTab.bind(this, index)}>
       <img src={this.getImageSource(service)} className="sidebar-icon" alt={service} /></a>
      </li>
      );
    });
    return (
      <ul className="sidebar-icons-list">{listItems}</ul>
    );
  }

  render(){
    return(
      <div className="column col-1">
        <div id="sidebar-container" className="off-canvas">
          <div id="sidebar" className="off-canvas-sidebar off-canvas-sidebar-show">
            <div className="sidebar-content">
              {this.listServiceIcons(this.props) }
            </div>
          </div>
        </div>  
      </div>
    );
  };
};

export default Sidebar