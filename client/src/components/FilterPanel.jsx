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
     backgroundColor: (theme) => theme.palette.mode === 'dark' 
       ? 'rgba(10, 61, 98, 0.8)' 
       : 'rgba(30, 136, 229, 0.8)',
     backgroundImage: 'url("https://img.freepik.com/free-vector/fishing-pattern-background_53876-93589.jpg")',
     backgroundSize: 'cover',
     backgroundBlendMode: 'overlay',
     border: '1px solid #0d47a1',
     borderRadius: '8px'
   }}>
     <Typography variant="h6" sx={{ mb: 1 }}>Категории</Typography>
     <ButtonGroup fullWidth variant="contained" sx={{ 
       gap: 1,
       '& .MuiButton-root': {
         py: 1.5,
         fontWeight: 500,
         letterSpacing: 0.5,
         transition: 'all 0.3s ease',
         '&:hover': {
           transform: 'translateY(-2px)',
           boxShadow: (theme) => theme.shadows[4]
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
