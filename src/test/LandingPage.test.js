import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from '../components/LandingPage';
import HorizontalLoopCar from '../components/HorizontalLoopCar';
import LandingPageCopy from '../components/LandingPageCopy';

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

  it ('has a div with className "pink-gradient-container"', () => {
    expect(wrapper.find('div.pink-gradient-container')).toHaveLength(1);
  })

  it ('has a div with className "pink-pattern"', () => {
    expect(wrapper.find('div.pink-pattern')).toHaveLength(1);
  })

  it ('has a div with className "background-overlay"', () => {
    expect(wrapper.find('div.background-overlay')).toHaveLength(1);
  })
})
