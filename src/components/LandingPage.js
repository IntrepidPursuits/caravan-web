import React, { Component } from 'react';
import '../stylesheets/LandingPage.css'
import icnGoogleplus from '../assets/icnGoogleplus.png'

export class LandingPage extends Component {
  render(){
    return(
      <div className='container'>
        <div className='Mask'>
          <p></p>
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
              <img src={icnGoogleplus} alt=''/>
            </div>
            <div className='Log-in-with-Google'>Log in with Google</div>
          </button>
        </div>
      </div>
    )
  }
}
