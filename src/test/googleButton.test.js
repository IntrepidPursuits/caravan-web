import googleButton from '../reducers/googleButton';

describe ('googleButton reducer', () => {
  const initialState = { isClicked: false }

  it ('returns the state when no action is dispatched', () => {
    expect(googleButton(initialState, {})).toEqual(initialState);
  })

  it ('handles clicking the google button', () => {
    const action = {
      type: 'GOOGLE_BUTTON_CLICK',
      googleButtonClicked: true,
    }

    const newState = { isClicked: true }

    expect(googleButton(initialState, action)).toEqual(newState);
    expect(initialState).toEqual({ isClicked: false })
  })
})
