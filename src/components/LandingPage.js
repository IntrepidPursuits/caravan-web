import '../stylesheets/LandingPage.css';
import React from 'react';
import HorizontalLoopCar from './HorizontalLoopCar'
import LandingPageCopy from './LandingPageCopy'

const LandingPage = (props) => {
  return(
    <div className='container'>
      <div className='mask'>
        <div className='logo'>
          Caravan
        </div>
        <HorizontalLoopCar />
      </div>
      <div className='white-background'>
        <LandingPageCopy />
      </div>
    </div>
  )
}

export default LandingPage;
