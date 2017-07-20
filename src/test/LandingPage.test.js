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

  it ('has a div with className "splashscreen-gradient"', () => {
    expect(wrapper.find('div.splashscreen-gradient')).toHaveLength(1);
  })

  it ('has a div with className "splashscreen-pattern"', () => {
    expect(wrapper.find('div.splashscreen-pattern')).toHaveLength(1);
  })

  it ('has a div with className "welcome-background"', () => {
    expect(wrapper.find('div.welcome-background')).toHaveLength(1);
  })
})
