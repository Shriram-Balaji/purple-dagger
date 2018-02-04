import React, { Component } from 'react'
import './sidebar.css'
import icons from '~/inline.icons'

class Sidebar extends Component {
  constructor(props){
    super(props)
  }

  getImageSource(icon){
    return icons[icon]
  }

  listSidebarIcons(props) {
    let options = props.menuItems
    const listItems = (options).map((option, index) => {
      let id = `${option}Icon`
      let link = "#"+`${option}`
      return (
      <li key={iconType}>
       <a href={link} id={id} className="sidebar-icons"  onClick={this.props.onSelectTab.bind(this, index)}>
       <img src={this.getImageSource(option)} className="sidebar-icon" alt={option} />
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
              {this.listSidebarIcons(this.props) }
            </div>
          </div>
    );
  };
};

export default Sidebar