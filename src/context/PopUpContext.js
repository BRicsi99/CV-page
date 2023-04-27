import { createContext, useReducer } from "react";
import popupReducer from './PopUpReducer'

const PopUpContext = createContext()

export const PopUpProvider = ({children}) =>{
    const initialState = {
      src: null,
    }

    const [state, dispatch] = useReducer(popupReducer, initialState)

    const setVisible = (src) =>{
        dispatch({
            type: 'SET_VISIBLE',
            payload: src
        })
    }

    const setHidden = () =>{
        dispatch({
            type: 'SET_HIDDEN',
        })
    }

    return <PopUpContext.Provider value={{src: state, setVisible, setHidden}}>
        {children}
    </PopUpContext.Provider>
}

export default PopUpContext