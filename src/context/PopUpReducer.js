const popupReducer = (state, action) => {
  switch (action.type) {
    case "SET_VISIBLE":
      return {
        ...state,
        status: true,
        src: action.payload[0],
        title: action.payload[1],
        progress: action.payload[2], 
        url: action.payload[3], 
        gitlab: action.payload[4],
      };
    case "SET_HIDDEN":
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
};

export default popupReducer;
