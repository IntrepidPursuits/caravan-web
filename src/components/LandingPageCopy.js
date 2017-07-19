import React, { Component } from 'react';

class LandingPageCopy extends Component {
  render(){
    let icGooglePlus = 'https://s3.amazonaws.com/intrepid-caravan/google-plus-icon.svg'
    return(
      <div>
        <div className='tagline'>
          Welcome to Caravan
          <div className='caravan-description'>
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
