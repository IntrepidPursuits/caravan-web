import React, { Component } from 'react';
import '../stylesheets/LandingPage.css';
import icGooglePlus from '../assets/ic-google-plus.png';
import SplashScreenCar from '../assets/SplashScreen_Car.png'

export class LandingPage extends Component {
  render(){
    return(
      <div className='container'>
        <div className='Mask'>
          <div className='logo'>
            Caravan
          </div>
          <div className='car-wrapper'>
            <img className='car' src={SplashScreenCar} alt='' />
          </div>
        </div>
        <div className='white-background'>
          <div className='Tagline'>
            Welcome to Caravan
          </div>
          <div className='tagline-copy'>
            Taking a road trip? Organize how
            travelers will get to their destination.
          </div>
          <button className='google-button'>
            <div className='gplus'>
              <img src={icGooglePlus} alt=''/>
            </div>
            <div className='Log-in-with-Google'>Log in with Google</div>
          </button>
        </div>
      </div>
    )
  }
}
