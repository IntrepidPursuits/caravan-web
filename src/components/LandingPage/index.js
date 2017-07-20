import React from 'react';
import HorizontalLoopCar from './HorizontalLoopCar/index'
import LandingPageCopy from './Copy/index'

const LandingPage = (props) => {
  return(
    <div className='container'>
      <div className='splashscreen-gradient'>
        <div className='splashscreen-pattern'>
          <div className='splashscreen-logo'>
            Caravan
          </div>
          <HorizontalLoopCar />
        </div>
      </div>
      <div className='welcome-background'>
        <LandingPageCopy {...props}/>
      </div>
    </div>
  )
}

export default LandingPage;
