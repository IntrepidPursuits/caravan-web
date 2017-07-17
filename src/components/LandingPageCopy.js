import React from 'react';
import { Link } from 'react-router';
import icGooglePlus from '../assets/icGooglePlus.svg';
import googleButtonClick from '../reducers/googleButtonClick';
import clickGoogleLogin from '../actions/actionCreators';

const LandingPageCopy = (props) => {
  // let googlePlus = `https://s3.amazonaws.com/intrepid-caravan/ic-google-plus.svg`
  return(
    <div>
      <div className='tagline'>
        Welcome to Caravan
      </div>
      <div className='description'>
        Taking a road trip? Organize how
        travelers will get to their destination.
      </div>
      <button className='google-button' onClick={props.clickGoogleLogin.bind(null, googleButtonClick)}>
        <div className='gplus'>
          <img src={icGooglePlus} alt=''/>
        </div>
        <div className='button-text'>Log in with Google</div>
      </button>
    </div>
  )
}

export default LandingPageCopy;
