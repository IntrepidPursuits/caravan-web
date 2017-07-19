import React from 'react';
import HorizontalLoopCar from './HorizontalLoopCar'
import LandingPageCopy from './LandingPageCopy'

const LandingPage = (props) => {
  return(
    <div className='container'>
      <div className='pink-gradient-container'>
        <div className='pink-pattern'>
          <div className='background-logo'>
            Caravan
          </div>
          <HorizontalLoopCar />
        </div>
      </div>
      <div className='background-overlay'>
        <LandingPageCopy {...props}/>
      </div>
    </div>
  )
}

export default LandingPage;
