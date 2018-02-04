import React, { Component } from 'react'
import classNames from 'classnames'
import Icons from '~/inline.icons'
import '~/components/Cards/GenericCard/generic-card.css'
import './spl-card.css'

class SplCard extends Component {
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
      'spl-avatar': style.avatar
    });
    return( <Icon fill={style.fill} stroke={style.stroke} className={iconClass}/> )
  }

  openUrl(event, url){
    event.preventDefault();
    window.open(url)
  }

  listCircularImages(props){
    let imageItems = []
    if(props.imageList.length <= 0){
      imageItems[0] = (
        <li><span className="rounded no-avatar"/></li>
      )
    }
    else {
      for(let index in props.imageList){
        let avatarImage = props.imageList[index]['url']
        makers[index] = (
          <li onClick={(e) => this.openUrl( e, profileUrl)}><img src={imageUrl} className="rounded" alt={maker.username} /></li>
        )
      }
    }
    return (<ul className>{imageItems}</ul>)
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
            <div className="avatarList">
              <h3> LIST TITLE </h3>
              {this.listCircularImages(this.props)}
            </div>
            <div className="card-footer spl-tile-footer columns no-margin padding-5">
              <div id="metaContainer" className="column padding-5">
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

export default SplCard