import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(); //context created

const ThemeProvider = ({ children }) => { //to wrap children and provide context 
                                        //with value as stae/functions of wrapper
    const [isDark, setIsDark] = useState(false); //state

    const toggleTheme = () => { //function
        setIsDark( (prev) => !prev ) // !isDark
    }

    return  (
        <ThemeContext.Provider value={{isDark, toggleTheme}} > //ThemeProvider = ThemeContext.Provider
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() { //custom hook to useContext
    return useContext(ThemeContext);
}

export {ThemeProvider, useTheme } 

// Context => Provider({childre}) => Context.Provider value-{{state, func}} =>
// use Context => destructure state/func 