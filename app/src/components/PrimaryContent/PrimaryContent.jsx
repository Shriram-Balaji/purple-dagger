import React, { Component } from 'react'
import './primary-content.css'
import config from '~/config'
import GenericCard from '~/components/Cards/GenericCard'
import PhCard from '~/components/Cards/PhCard'

class PrimaryContent extends Component {
  constructor(props){
    super(props);
  }

  renderDribbbleCards(props, cards, item, index){
    let description = item.description.replace(/(<([^>]+)>)/ig,"");
    cards[index] = (<GenericCard 
      key={`${index}-${item.id}`} 
      header={item.title} 
      image={item.images.normal} 
      description={description} 
      colors={config[props.type]['palette']} 
      detailOne={item.user.name} 
      detailOneLink={item.user.html_url} 
      detailTwo={item.views_count} 
      meta={config[props.type]['meta']} 
      type={props.type} 
      link={item.html_url} 
    />)
    return cards[index]
  }

  renderPhCards(props, cards, item, index) {
    let color = config['productHunt']['palette']
    console.log(color);
    cards[index] = <PhCard key={item.id} 
      header={item.name}
      tagline = {item.tagline}
      link={item['discussion_url']} 
      image={item.thumbnail['image_url']}
      colors={config[props.type]['palette']}  
      meta={config[props.type]['meta']}
      detailOne={item['votes_count']}
      makers = {item.makers}
      detailTwo = {item['comments-count']} />
     
    return cards[index]
  }

  listCards(data, type){
    let cards = [];
    switch(type) {
      case 'dribbble':
        for(let index in data){
          let item = data[index];
          this.renderDribbbleCards(this.props, cards, item, index)
        }

      case 'productHunt':
        let posts = data['posts']
        for(let index in posts){
          let item = posts[index]
          this.renderPhCards(this.props, cards, item, index)
        }
     }
      return (cards);

  }

  render(){
    return(
      <div className="primary-content">
          <h4 className="content-title"> {this.props.title} </h4>
          <div id="cardContainer" className="columns">
              {this.listCards(this.props.data, this.props.type)}
          </div>
      </div> 
    )
  }
}

export default PrimaryContent