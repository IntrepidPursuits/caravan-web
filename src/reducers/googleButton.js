const initialState = {
  isClicked: false,
}

const googleButton = (state = initialState.isClicked, action) => {
  switch (action.type) {
    case 'GOOGLE_BUTTON_CLICK':
      return {
        ...state,
        isClicked: action.googleButtonClicked,
      }
    default:
      return state;
  }
}

export default googleButton;
