import React, { useContext, useState } from 'react';
import './styles/background-fallback.css';
import { Container, Typography, Grid, IconButton, useTheme, Button, Paper } from '@mui/material';
import UserInfoPopup from './components/UserInfoPopup';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AuthPage from './pages/AuthPage';
import LoginButton from './components/LoginButton';
import { useThemeContext } from './context/ThemeContext_new';

function App() {
  const theme = useTheme();
  const { toggleTheme } = useThemeContext();
  const [userInfoPopupOpen, setUserInfoPopupOpen] = useState(false);
  const [user, setUser] = useState({ name: 'User Name', email: 'user@example.com' });
  const [orderHistory, setOrderHistory] = useState([]);

  return (
    <Router>
      <Container sx={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          url('https://pic.rutubelist.ru/userappearance/c5/5b/c55b53d698f830963cbc73c24de0a8b7.jpeg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        p: 2,
        paddingTop: '20px'
      }}>
        <Paper elevation={6} sx={{ 
  p: 3,  // Увеличено с 2 до 3
  textAlign: 'center',
  background: '#D10000',
  color: 'white',
  borderRadius: 0,
  boxShadow: 3,
          width: '95%',
  margin: '0 auto',
  zIndex: 1000,
  marginBottom: '30px',
  backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('https://pic.rutubelist.ru/userappearance/c5/5b/c55b53d698f830963cbc73c24de0a8b7.jpeg')
  `,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}}>
  <Typography variant="h1" component="h1" sx={{ 
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  }}>
    Fish Hunter
  </Typography>
  <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
    Профессиональные снасти для настоящих охотников
  </Typography>
</Paper>
        <IconButton 
          onClick={toggleTheme} 
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <div style={{
          position: 'absolute',
          top: 8,
          left: 8,
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
          alignItems: 'center'
        }}>
          <Button 
            variant="contained" 
            size="small"
            onClick={() => setUserInfoPopupOpen(true)}
            sx={{ 
              backgroundColor: '#D10000',
              color: 'white',
              '&:hover': {
                backgroundColor: '#B00000',
                boxShadow: '0 0 10px rgba(209, 0, 0, 0.5)'
              }
            }}
          >
            Профиль
          </Button>
          <LoginButton />
        </div>
        
        <Routes>
          <Route path="/" element={
            <Grid container spacing={2}>
              <Grid item xs={12} md={9}>
                <ProductList />
              </Grid>
              <Grid item xs={12} md={3}>
                <Cart />
              </Grid>
            </Grid>
          } />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>

        <UserInfoPopup 
          open={userInfoPopupOpen} 
          onClose={() => setUserInfoPopupOpen(false)} 
          user={user} 
          orderHistory={orderHistory} 
        />
      </Container>
    </Router>
  );
}

export default App;
