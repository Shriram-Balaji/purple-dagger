import React, { Component } from 'react'
import classNames from 'classnames'
import './generic-card.css'
import Icons from '~/inline.icons'

class GenericCard extends Component {
  constructor(props) {
    super(props)
  }

  openLink(link){
    window.open(link);
  }

  renderIcon(props){
    const iconName = props.icon.name
    const style  = props.icon.style
    const Icon = Icons[iconName]
    const iconClass = classNames({
    'avatar': style.avatar
    });
    return( <Icon fill={style.fill} stroke={style.stroke} className={iconClass}/> )
  }

  render(){
    return(
    <div className="column is-3" onClick={()=> this.openLink(this.props.link)}>  
        <div className="card content-tile">
          <div className="card-image">
              <figure className="image is-4by3">
                <img src={this.props.image} className="img-responsive" />
                <header className="card-header header-overlay">
            <p className="card-header-title content-header is-size-5 is-centered"> {this.props.header} </p>
               </header>
              </figure>
          </div>
          <div className="card-content">
            <div className="content">
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default GenericCard;