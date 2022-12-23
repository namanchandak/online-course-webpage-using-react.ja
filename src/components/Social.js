import React, { Component } from 'react'

import { SocialIcon } from 'react-social-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export class Social extends Component {
  render() {
    return (

      <div>


<div className="container">
   <div className="column-center"></div>
   <div className="column-left"></div>
   <div className="column-right">
   <SocialIcon network="facebook" bgColor="#666680" />

<SocialIcon network="twitter" bgColor="#666680" />

<SocialIcon network="instagram" bgColor="#666680" />
   </div>
</div>









      </div>
     
    )
  }
}

export default Social