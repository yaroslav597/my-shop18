import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState('light');
  
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: '#D10000', // Сохраняем красный цвет для шапки
      },
      secondary: {
        main: '#1976d2',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
    spacing: 8, // Сохраняем стандартные отступы
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease', // Плавные переходы
          },
        },
      },
    },
  }), [mode]);

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
