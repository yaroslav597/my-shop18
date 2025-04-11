import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Rating, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{
      maxWidth: 300,
      m: 2,
      transition: 'transform 0.3s',
      backgroundColor: 'white',
      border: '2px solid #D10000',
      borderRadius: '12px',
      color: '#000000',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 15px rgba(209, 0, 0, 0.7)',
        backgroundColor: '#f5f5f5'
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
          background: 'linear-gradient(45deg, #D10000, #FF6B00)',
          color: 'white',
          border: '2px solid #000',
          padding: '12px 30px',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          boxShadow: '0 4px 0 #000',
          transition: 'all 0.3s',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 0 #000',
            background: 'linear-gradient(45deg, #FF0000, #FF8C00)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              backgroundImage: 'url(/assets/blood-drops.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '80%',
              opacity: 0.7,
              transform: 'translate(-50%, -50%)'
            }
          }
        }}
      >
        В корзину
      </Button>
    </Card>
  );
};

export default ProductCard;
