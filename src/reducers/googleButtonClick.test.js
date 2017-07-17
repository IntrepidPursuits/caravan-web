import googleButtonClick from './googleButtonClick';

describe ('googleButtonClick reducer', () => {
  const initialState = { clicked: false }

  it ('returns the state when no action is dispatched', () => {
    expect(googleButtonClick(initialState, {})).toEqual(initialState);
  })

  it ('handles clicking the google button', () => {
    const action = {
      type: 'GOOGLE_BUTTON_CLICK',
      googleButtonClicked: true
    }

    const newState = { clicked: true }

    expect(googleButtonClick(initialState, action)).toEqual(newState);
    expect(initialState).toEqual({ clicked: false })
  })
})
