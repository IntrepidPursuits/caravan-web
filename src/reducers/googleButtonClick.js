const googleButtonClick = (state = [], action) => {
  switch (action.type) {
    case 'GOOGLE_BUTTON_CLICK':
    const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], googleButtonClick: {
          clicked: !state.googleButtonClick.clicked
        }},
        ...state.slice(i + 1)
      ]
    default:
      return state;
  }
}

export default googleButtonClick;
