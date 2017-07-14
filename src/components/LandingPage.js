import React, { Component } from 'react';
import '../stylesheets/LandingPage.css';
import icGooglePlus from '../stylesheets/CaravanWeb_Assets/ic-google-plus.png';

export class LandingPage extends Component {
  render(){
    return(
      <div className='container'>
        <div className='Mask'>
          <div className='logo'>
            Caravan
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
