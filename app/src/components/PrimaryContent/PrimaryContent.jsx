import React, { Component } from 'react'
import './primary-content.css'
import Card from '~/components/Card'

class PrimaryContent extends Component {
  constructor(props){
    super(props);
  }

  listCards(shots){
    let cards = [];
    for(let index in shots){
      let shot = shots[index];
      let description = shot.description.replace(/(<([^>]+)>)/ig,"");
      cards[index] = <Card key={index} header={shot.title} image={shot.images.normal} description={description} user={shot.user} type={this.props.title.toLowerCase()} link={shot.html_url}></Card>
    }
      return (cards);
  }

  render(){
    return(
      <div className="primary-content">
          <h4 className="content-title"> {this.props.title} </h4>
          <div id="cardContainer" className="columns">
              {this.listCards(this.props.data)}
          </div>
      </div> 
    )
  }
}

export default PrimaryContent