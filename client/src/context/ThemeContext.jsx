import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light');
  
  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
