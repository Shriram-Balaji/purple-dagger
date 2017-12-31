import React, { Component } from 'react'
import classNames from 'classnames'
import Icons from '~/icons.inline'
import '~/components/Cards/GenericCard/generic-card.css'
import './ph-card.css'

class PhCard extends Component {
  constructor(props){
    super(props)
  }

  openLink(event){
    event.preventDefault();
    window.open(this.props.link);
  }

  renderIcon(props){
    const iconName = props.icon.name
    const style  = props.icon.style
    console.log(style)
    const Icon = Icons[iconName]
    const iconClass = classNames({
    'avatar': style.avatar
    });
    return( <Icon fill={style.fill} stroke={style.stroke} className={iconClass}/> )
  }

  listMakers(props){
    let makers = []
    for(let index in props.makers){
      let maker = props.makers[index]
      let imageUrl = maker['image_url']['44px']
      makers[index] = (
        <li><img src={imageUrl} className="rounded"/></li>
      )
    }
    return (<ul>{makers}</ul>)
  }


  render(){
      return(
        <div className="column is-4" onClick={this.openLink.bind(this)}>  
          <div className="card content-tile">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={this.props.image} alt="Placeholder image" className="thumbnail"/>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5">{this.props.header}</p>
                  <p className="subtitle is-6">{this.props.tagline}</p>
                </div>
              </div>
            </div>
            <div className="makers">
              <p id="makerTitle"> MAKERS </p>
              {this.listMakers(this.props)}
            </div>
            <div className="card-footer ph-tile-footer">
              <span className={`chips ${this.props.colors['detail-one']}-chip `}>
                  {this.renderIcon(this.props.meta['detail-one'])}
                 {this.props.detailOne}</span>
            </div>
          </div>
        </div> 
      )
    }
  }

export default PhCard