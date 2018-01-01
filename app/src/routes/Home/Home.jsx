import React, { Component } from 'react'
import config from '~/config'
import './home.css'
import Header from '~/components/Header'
import Sidebar from '~/components/Sidebar'
import MainContainer from '~/components/MainContainer'
import PrimaryContent from '~/components/PrimaryContent'
// import Footer from '~/components/Footer'

import dribbbleData from '../../../../data/mock-dribbble.json'
import productHuntData from '../../../../data/product-hunt-posts.json'

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {selected: props.selected}
    this.selectTab = this.selectTab.bind(this)
  }
  
  getServices(config){
    let services = config.services.available
    services = services.map(s => s.replace(/\s+/g, ''))
    return services
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
              <div className="column is-narrow no-padding">
                  <div id="sidebarContainer">
                    <Sidebar services={this.getServices(config)} selected={this.props.selected} onSelectTab={this.selectTab} ></Sidebar>
                  </div>
              </div>
                <div className="column" id="mainContainer">
                  <MainContainer selected={this.state.selected}> 
                    <PrimaryContent data={dribbbleData} title="Dribbble" type="dribbble"></PrimaryContent>
                    <PrimaryContent title="GitHub"></PrimaryContent>
                    <PrimaryContent title="Product Hunt" data={productHuntData} type="productHunt"></PrimaryContent>
                    <PrimaryContent title="Code Pen"></PrimaryContent>
                  </MainContainer>
                </div>  
            </div>
      </div>
      )
  }
}

export default Home