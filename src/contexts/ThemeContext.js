import React, {createContext } from 'react';
import useToggleContext from '../hooks/useToggleState';
export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [isDarkMode, toggleTheme] = useToggleContext(false);
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
};
