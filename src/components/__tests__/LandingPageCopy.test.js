import React from 'react';
import { shallow } from 'enzyme';
import LandingPageCopy from '../LandingPage/Copy/index';

describe ('LandingPageCopy', () => {
  let wrapper = shallow(<LandingPageCopy />);

  it ('says welcome', () => {
    expect(wrapper.find('div.welcome')).toHaveLength(1);
    expect(wrapper.text()).toContain('Welcome to Caravan');
  })

  it ('has the right description', () => {
    let text = "Taking a road trip? Organize how travelers will get to their destination."

    expect(wrapper.find('div.welcome-description')).toHaveLength(1);
    expect(wrapper.text()).toContain(text);
  })

  it ('displays the google login button', () => {
    let image = "https://s3.amazonaws.com/intrepid-caravan/google-plus-icon.svg";
    let buttonImage = wrapper.find('img').render()[0]['children'][0];

    expect(buttonImage['attribs']['src']).toEqual(image)
    expect(wrapper.text()).toContain("Log in with Google");
    expect(wrapper.find('button.google-button')).toHaveLength(1);
    expect(wrapper.find('img.gplus')).toHaveLength(1);
  })
})
