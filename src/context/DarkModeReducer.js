const themeReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return {
          ...state,
          currentThemeLight: !state.currentThemeLight,
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  