import React, { Component } from 'react';

class LandingPageCopy extends Component {
  render(){
    let icGooglePlus = 'https://s3.amazonaws.com/intrepid-caravan/google-plus-icon.svg'
    return(
      <div>
        <div className='tagline'>
          Welcome to Caravan
        </div>
        <div className='description'>
          Taking a road trip? Organize how
          travelers will get to their destination.
        </div>
        <button className='google-button' onClick={this.props.clickGoogleLogin}>
          <div className='gplus'>
            <img src={icGooglePlus} alt=''/>
          </div>
          <div className='button-text'>
            Log in with Google
          </div>
        </button>
      </div>
    )
  }
}

export default LandingPageCopy;
