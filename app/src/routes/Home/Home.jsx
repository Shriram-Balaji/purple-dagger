import React, { Component } from 'react'
import './home.css'
import Header from '~/components/Header'
import MainContainer from '~/components/MainContainer'
import Sidebar from '~/components/Sidebar'
import PrimaryContent from '~/components/PrimaryContent'
// import Footer from '~/components/Footer'

class Home extends Component {
  constructor(props){
    super(props);
  }

  getServices(){
    let services = ['dribbble','gitHub','product Hunt','code Pen'];
    return services
  }

  render(){
    return(
      <div className = "container" id="homeContainer">
        <div className="columns">
          <div className="column col-12 no-padding no-margin">
            <Header logo="Rad Proton"/>
          </div>
            <MainContainer selected={0} services={this.getServices()}> 
              <PrimaryContent title="Dribbble"></PrimaryContent>
              <PrimaryContent title="GitHub"></PrimaryContent>
              <PrimaryContent title="Product Hunt"></PrimaryContent>
              <PrimaryContent title="Code Pen"></PrimaryContent>
            </MainContainer>
        </div>  
      </div>
      )
  }
}

export default Home