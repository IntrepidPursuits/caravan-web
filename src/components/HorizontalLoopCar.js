import React from 'react';

let carImage = "https://s3.amazonaws.com/intrepid-caravan/horizontal-loop-car.svg"

const HorizontalLoopCar = (props) => {
  return(
    <div className='car-wrapper'>
      <img className='car' src={carImage} alt='' />
    </div>
  )
}

export default HorizontalLoopCar;
