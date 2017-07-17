import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';
import HorizontalLoopCar from './HorizontalLoopCar';
import LandingPageCopy from './LandingPageCopy';

describe ('LandingPage', () => {
  let wrapper = shallow(<LandingPage />);

  it ('renders one HorizontalLoopCar', () => {
    expect(wrapper.containsMatchingElement(<HorizontalLoopCar />)).toEqual(true);
    expect(wrapper.find('HorizontalLoopCar')).toHaveLength(1);
  })

  it ('renders one LandingPageCopy', () => {
    expect(wrapper.containsMatchingElement(<LandingPageCopy />)).toEqual(true);
    expect(wrapper.find('LandingPageCopy')).toHaveLength(1);
  })

  it ('contains the app title', () => {
    expect(wrapper.text()).toContain('Caravan')
  })

  it ('has a div with className "container"', () => {
    expect(wrapper.find('div.container')).toHaveLength(1);
  })

  it ('has a div with className "mask"', () => {
    expect(wrapper.find('div.mask')).toHaveLength(1);
  })

  it ('has a div with className "white-background"', () => {
    expect(wrapper.find('div.white-background')).toHaveLength(1);
  })
})
