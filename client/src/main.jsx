import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeContextProvider, useThemeContext } from './context/ThemeContext_new';
import { ThemeProvider } from '@mui/material/styles';
import { ErrorBoundary } from './components/ErrorBoundary';
import App from './App';

function Main() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeContextProvider>
          <Main />
        </ThemeContextProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
