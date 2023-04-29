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
    description: "",
  };

  const [state, dispatch] = useReducer(popupReducer, initialState);

  const setVisible = (item) => {
    dispatch({
      type: "SET_VISIBLE",
      payload: [item.image, item.name, item.progress, item.url, item.gitlab, item.description],
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
