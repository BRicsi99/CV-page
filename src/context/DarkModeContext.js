import { createContext, useReducer } from "react";
import themeReducer from './DarkModeReducer'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const initialState = {
      currentThemeLight: true,
    }

    const [state, dispatch] = useReducer(themeReducer, initialState)

    const setTheme = () =>{
        dispatch({
            type: 'CHANGE_THEME',
        })
    }

    return <ThemeContext.Provider value={{...state, setTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContext