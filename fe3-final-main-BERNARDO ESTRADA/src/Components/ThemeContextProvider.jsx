import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const initialState = {
    theme: 'light'
}

const themeReducer = (state, action) => {
    switch (action.type) {
    case 'TOGGLE_THEME':
        return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
        }
    default:
        return state
}
}

const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' })
    }

    return (
        <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
            <div className={`theme-container ${state.theme}`}>
                {children}
            </div>
    </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;