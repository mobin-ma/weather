const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "TOGGLE_MENU": {
      return {
        ...state,
        menu: action.payload,
      };
    }
    case "SET_LOCATION": {
      return {
        ...state,
        loca: action.payload,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
