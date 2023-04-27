import { createContext, useReducer } from "react";
import popupReducer from "./PopUpReducer";

const PopUpContext = createContext();

export const PopUpProvider = ({ children }) => {
  const initialState = {
    status: false,
    src: "",
    title: "",
    progress: false,
    url: "",
    gitlab: "",
  };

  const [state, dispatch] = useReducer(popupReducer, initialState);

  const setVisible = (src, title, progress, url, gitlab) => {
    dispatch({
      type: "SET_VISIBLE",
      payload: [src, title, progress, url, gitlab],
    });
  };

  const setHidden = () => {
    dispatch({
      type: "SET_HIDDEN",
    });
  };

  return (
    <PopUpContext.Provider value={{ ...state, setVisible, setHidden }}>
      {children}
    </PopUpContext.Provider>
  );
};

export default PopUpContext;
