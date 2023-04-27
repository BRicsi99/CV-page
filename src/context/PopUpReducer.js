const popupReducer = (state, action) => {
  switch (action.type) {
    case "SET_VISIBLE":
      return {
        ...state,
        src: action.payload
      };
    case "SET_HIDDEN":
      return {
        ...state,
        src: null,
      };
    default:
      return state;
  }
};

export default popupReducer;
