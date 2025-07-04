import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Divider, Button, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector(state => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    const quantity = Math.max(1, parseInt(newQuantity) || 1);
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <Box sx={{ p: 2, backgroundColor: 'white' }}>
      <Typography variant="h5" gutterBottom>Корзина</Typography>
      <List>
        {items.map(item => (
          <React.Fragment key={item.id}>
            <ListItem secondaryAction={
              <IconButton edge="end" onClick={() => handleRemove(item.id)}>
                <Delete />
              </IconButton>
            }>
              <ListItemText 
                primary={item.name} 
                secondary={`${item.price} ₽`}
              />
              <TextField
                size="small"
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                sx={{ width: 60, mr: 2 }}
                inputProps={{ min: 1 }}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Итого: {total} ₽
      </Typography>
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ mt: 2 }}
        disabled={items.length === 0}
      >
        Оформить заказ
      </Button>
    </Box>
  );
};

export default Cart;
