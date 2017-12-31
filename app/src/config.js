// Constants and API Endpoints
// Configuration
const defaultStyle = {
  fill: 'none',
  stroke: '#fff',
  avatar: true
}

module.exports = {
  services: {
    available:['dribbble','gitHub','product Hunt','code Pen']
  },

  dribbble : {
    palette:{
      'primary':'pink',
      'detail-one': 'red',
      'detail-two': 'blue',
      'detail-three':'green'
    },

    // meta - extra info about the details provided
    meta:{  
      'detail-one':{
        icon:{
          name: 'UserIcon',
          style: defaultStyle
        },
        description:'Account Info'
      },
      'detail-two':{
        icon:{name: 'EyeIcon', style: defaultStyle},
        description:'views'
      },
      'detail-three':{
        icon:{name: 'HeartIcon', style: defaultStyle},
        description:'favourites'
      }
    }
    // primary, secondary, accent,
  },
  productHunt : {
    palette:{
      'primary':'pink',
      'detail-one': 'orange',
      'detail-two': 'red',
      'detail-three':'green'
    },

    // meta - extra info about the details provided
    meta:{  
      'detail-one':{
        icon:{
          name: 'VotesIcon',
          style: {
            fill: 'white',
            stroke: 'none',
            avatar: true
          }        
        },
        description:'Number of Votes'
      },
      'detail-two':{
        icon:{name: 'CommentsIcon', style: {
          fill: 'white',
          stroke: 'none',
          avatar: true
        }},
        description:'comments'
      },
      'detail-three':{
        icon:{name: 'HeartIcon', style: defaultStyle},
        description:'favourites'
      }
    }
    // primary, secondary, accent,
  }
};
