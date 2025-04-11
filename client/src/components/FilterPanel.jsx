import React from 'react';
import { Button, ButtonGroup, Paper, Typography } from '@mui/material';

const FilterPanel = ({ onFilterChange }) => {
 const categories = [
   { label: 'Все', value: 'all' },
   { label: 'Удилища', value: 'удилища' },
   { label: 'Катушки', value: 'катушки' },
   { label: 'Приманки', value: 'приманки' },
   { label: 'Лески', value: 'лески' },
 ];

 return (
   <Paper elevation={3} sx={{
     p: 2,
     mb: 2,
     textAlign: 'center',
     backgroundColor: '#D10000',
     backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
     backgroundSize: 'cover',
     border: '2px solid #000',
     borderRadius: '8px',
     color: 'white'
   }}>
     <Typography variant="h6" sx={{ mb: 1 }}>Категории</Typography>
     <ButtonGroup fullWidth variant="contained" sx={{ 
       gap: 1,
       '& .MuiButton-root': {
         py: 1.5,
         fontWeight: 500,
         letterSpacing: 0.5,
         transition: 'all 0.3s ease',
         backgroundColor: '#000000',
         color: 'white',
         '&:hover': {
           transform: 'translateY(-2px)',
           boxShadow: (theme) => theme.shadows[4],
           backgroundColor: '#1a1a1a'
         }
       }
     }}>
       {categories.map((category) => (
         <Button key={category.value} onClick={() => {
           console.log('Selected Category:', category.value);
           onFilterChange(category.value);
         }}>
           {category.label}
         </Button>
       ))}
     </ButtonGroup>
   </Paper>
 );
};

export default FilterPanel;
