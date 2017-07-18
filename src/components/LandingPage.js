import '../stylesheets/LandingPage.css';
import React from 'react';
import HorizontalLoopCar from './HorizontalLoopCar'
import LandingPageCopy from './LandingPageCopy'

const LandingPage = (props) => {
  return(
    <div className='layout-container'>
      <div className='red-background-section'>
        <div className='caravan-logo'>
          Caravan
        </div>
        <HorizontalLoopCar />
      </div>
      <div className='white-background'>
        <LandingPageCopy {...props}/>
      </div>
    </div>
  )
}

export default LandingPage;
