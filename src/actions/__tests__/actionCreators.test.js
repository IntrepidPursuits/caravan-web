import * as actions from '../actionCreators';

describe ('clickGoogleLogin', () => {
  it ('should create an action to set googleButtonClick.clicked to true', () => {
    const expectedAction = {
      type: 'GOOGLE_BUTTON_CLICK',
      googleButtonClicked: true,
    }

    expect(actions.clickGoogleLogin()).toEqual(expectedAction);
  });
});
