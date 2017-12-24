import React, { Component } from 'react'
import './home.css'
import Header from '../../components/Header'
// import Footer from '../../components/Footer'

class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = "home-container">
        <Header />
      </div>
      )
  }
}

export default Home