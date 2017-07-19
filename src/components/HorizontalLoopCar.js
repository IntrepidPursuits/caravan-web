import React from 'react';
import { carImage } from '../utilities/imageUrls'

const HorizontalLoopCar = (props) => {
  return(
    <div className='car-wrapper'>
      <img className='car' src={carImage} alt='' />
    </div>
  )
}

export default HorizontalLoopCar;
