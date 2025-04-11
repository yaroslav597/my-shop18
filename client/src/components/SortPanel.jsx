import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
const SortPanel = ({ onSortChange }) => {
 const sortOptions = [
 { value: 'default', label: 'По умолчанию' },
 { value: 'priceAsc', label: 'По цене (возрастание)' },
 { value: 'priceDesc', label: 'По цене (убывание)' },
 { value: 'rating', label: 'По рейтингу' },
 ];
 return (
 <FormControl fullWidth sx={{ my: 2 }}>
 <InputLabel sx={{ color: 'white' }}>Сортировка</InputLabel>
 <Select
 label="Сортировка"
 onChange={(e) => {
   console.log('Selected Sort Value:', e.target.value);
   onSortChange(e.target.value);
 }}
 sx={{
   color: 'white',
   '& .MuiOutlinedInput-notchedOutline': {
     borderColor: 'white'
   },
   '&:hover .MuiOutlinedInput-notchedOutline': {
     borderColor: 'white'
   },
   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
     borderColor: 'white'
   }
 }}
 defaultValue="default"
 >
 {sortOptions.map((option) => (
 <MenuItem key={option.value} value={option.value}>
 {option.label}
 </MenuItem>
 ))}
 </Select>
 </FormControl>
 );
};
export default SortPanel;
