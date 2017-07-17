const googleButtonClick = (state = {}, action) => {
  switch (action.type) {
    case 'GOOGLE_BUTTON_CLICK':
      return Object.assign({}, state, {
        clicked: action.googleButtonClicked
      })
    default:
      return state;
  }
}

export default googleButtonClick;
