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
    const Icon = Icons[iconName]
    const iconClass = classNames({
      'avatar': style.avatar,
      'ph-avatar': style.avatar
    });
    return( <Icon fill={style.fill} stroke={style.stroke} className={iconClass}/> )
  }

  openProfile(event, url){
    event.preventDefault();
    window.open(url)
  }

  listMakers(props){
    let makers = []
    if(props.makers.length <= 0){
      makers[0] = (
        <li><span className="rounded no-maker"/></li>
      )
    }
    else {
      for(let index in props.makers){
        let maker = props.makers[index]
        let imageUrl = maker['image_url']
        ['44px']
        let profileUrl = maker['profile_url']
        makers[index] = (
          <li onClick={(e) => this.openProfile( e, profileUrl)}><img src={imageUrl} className="rounded maker-avatar" alt={maker.username} /></li>
        )
      }
    }
    return (<ul className>{makers}</ul>)
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
            <div className="card-footer ph-tile-footer columns no-margin padding-5">
              <div id="metaContainer" className="column padding-5">
                <span className={`chips ${this.props.colors['detail-one']}-chip `}>
                    {this.renderIcon(this.props.meta['detail-one'])}
                  {this.props.detailOne}</span>
                
                <span className={`chips ${this.props.colors['detail-two']}-chip `}>
                    {this.renderIcon(this.props.meta['detail-two'])}
                  {this.props.detailTwo}</span>
              </div>
              <div className="column align-end padding-5">
               <a className="button is-red is-outlined is-small btn-rounded" id="redirectBtn"> GET IT</a>
              </div>    
            </div>
          </div>
        </div> 
      )
    }
  }

export default PhCard