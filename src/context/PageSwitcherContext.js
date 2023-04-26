import { createContext, useReducer } from "react";
import pageReducer from './PageSwitcherReducer'

const PageContext = createContext()

export const PageProvider = ({children}) =>{
    const initialState = {
      currentPage: 'AboutMe.jsx'
    }

    const [state, dispatch] = useReducer(pageReducer, initialState)

    const setPage = (pageName) =>{
        dispatch({
            type: 'SET_PAGE',
            payload: pageName
        })
    }

    return <PageContext.Provider value={{currentPage: state, setPage}}>
        {children}
    </PageContext.Provider>
}

export default PageContext