import React from 'react';
import { TextField } from '@mui/material';
const SearchBar = ({ onSearchChange }) => {
 return (
 <TextField
 fullWidth
 label="Поиск товаров"
 variant="outlined"
 sx={{ 
   my: 2,
   '& .MuiOutlinedInput-root': {
     color: 'white',
     '& fieldset': {
       borderColor: 'white',
     },
     '&:hover fieldset': {
       borderColor: 'white',
     },
     '&.Mui-focused fieldset': {
       borderColor: 'white',
     },
   },
   '& .MuiInputLabel-root': {
     color: 'white',
   },
   '& .MuiInputLabel-root.Mui-focused': {
     color: 'white',
   }
 }}
 onChange={(e) => onSearchChange(e.target.value)}
 />
 );
};
export default SearchBar;
