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
    this.selectTab = this.selectTab.bind(this)
  }

  getServices(props){
    let services = props.services.map(s => s.replace(/\s+/g, ''));
    return services
  }
  
  selectTab(index, event){
    event.preventDefault();
    this.setState({selected: index})
  }

  render(){
    return(
      <div className="main-container column col-12">
        <Sidebar services={this.getServices(this.props)} selected={this.props.selected} onSelectTab={this.selectTab}>
        </Sidebar>
        <div className="column col-11">
          {this.props.children[this.state.selected]}
        </div>
       </div> 
    );
  };

};

export default MainContainer