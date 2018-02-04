import React, { Component } from 'react'
import config from '~/config'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'
import MainContainer from '~/components/MainContainer'
import PrimaryContent from '~/components/PrimaryContent'
import './home.css'
// import Footer from '~/components/Footer'

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {selected: props.selected}
    this.selectTab = this.selectTab.bind(this)
  }
  
  getMenuItems(config){
    return ['menuItemOne','menuItemTwo','menuItemThree']
  };
    
  selectTab(index, event){
    event.preventDefault();
    this.setState({selected: index})
  }

  render(){
    return(
      <div id="homeContainer">
          <Header logo="Rad Proton"/>
            <div className="columns">
              <div className="column is-narrow is-hidden-touch no-padding">
                  <div id="sidebarContainer">
                    <Sidebar menuItems={this.getMenuItems(config)} selected={this.props.selected} onSelectTab={this.selectTab} ></Sidebar>
                  </div>
              </div>
                <div className="column" id="mainContainer">
                  <MainContainer selected={this.state.selected}> 
                    <PrimaryContent title="MenuItemOne"></PrimaryContent>
                    <PrimaryContent title="MenuItemTwo"></PrimaryContent>
                  </MainContainer>
                </div>  
            </div>
      </div>
      )
  }
}

export default Home