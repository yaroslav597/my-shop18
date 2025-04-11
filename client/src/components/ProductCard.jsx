import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Rating, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{
      maxWidth: 300,
      m: 2,
      transition: 'transform 0.3s',
      backgroundColor: (theme) => theme.palette.mode === 'dark'
        ? 'rgba(10, 61, 98, 0.7)'
        : 'rgba(176, 224, 255, 0.7)',
      border: '1px solid #0d47a1',
      borderRadius: '12px',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 15px rgba(13, 71, 161, 0.5)'
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 1 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
          <Rating value={product.rating} precision={0.5} readOnly />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({product.reviews} отзывов)
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
          {product.price} ₽
        </Typography>
      </CardContent>
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ 
          backgroundColor: '#0d47a1',
          '&:hover': {
            backgroundColor: '#1565c0'
          }
        }}
      >
        В корзину
      </Button>
    </Card>
  );
};

export default ProductCard;
