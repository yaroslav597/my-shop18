import { Card, CardMedia, CardContent, Typography, Button, Rating, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card sx={{
      maxWidth: 300,
      m: 1,
      minHeight: 500,
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', p: 1 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
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
          backgroundColor: '#D10000',
          color: 'white',
          '&:hover': {
            backgroundColor: '#B00000'
          }
        }}
        onClick={handleAddToCart}
      >
        В корзину
      </Button>
    </Card>
  );
};

export default ProductCard;
