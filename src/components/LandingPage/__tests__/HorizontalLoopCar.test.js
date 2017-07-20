import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalLoopCar from '../HorizontalLoopCar/index';
import { shallow } from 'enzyme';

describe ('HorizontalLoopCar', () => {
  it ('contains the car image', () => {
    let image = "https://s3.amazonaws.com/intrepid-caravan/horizontal-loop-car.svg"
    let wrapper = shallow(<HorizontalLoopCar />);
    let renderedImage = wrapper.find('img').render()[0]['children'][0];
    expect(renderedImage['attribs']['src']).toEqual(image)
  })
})
