import React, { Component } from 'react';
import { icGooglePlus } from '../utilities/imageUrls'

class LandingPageCopy extends Component {
  render(){
    return(
      <div>
        <div className='welcome'>
          Welcome to Caravan
          <div className='welcome-description'>
            Taking a road trip? Organize how
            travelers will get to their destination.
          </div>
        </div>
        <button className='google-button' onClick={this.props.clickGoogleLogin}>
          <img className='gplus' src={icGooglePlus} alt=''/>
          Log in with Google
        </button>
      </div>
    )
  }
}

export default LandingPageCopy;
