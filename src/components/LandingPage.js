import '../stylesheets/LandingPage.css';
import React from 'react';
import icGooglePlus from '../assets/ic-google-plus.png';
import splashScreenCar from '../assets/splashScreenCar.png'

const LandingPage = (props) => {
  return(
    <div className='container'>
      <div className='mask'>
        <div className='logo'>
          Caravan
        </div>
        <div className='car-wrapper'>
          <img className='car' src={splashScreenCar} alt='' />
        </div>
      </div>
      <div className='white-background'>
        <div className='tagline'>
          Welcome to Caravan
        </div>
        <div className='description'>
          Taking a road trip? Organize how
          travelers will get to their destination.
        </div>
        <button className='google-button'>
          <div className='gplus'>
            <img src={icGooglePlus} alt=''/>
          </div>
          <div className='button-text'>Log in with Google</div>
        </button>
      </div>
    </div>
  )
}

export default LandingPage;
