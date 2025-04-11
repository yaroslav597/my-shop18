import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../api/products';

export const loadProducts = createAsyncThunk(
 'products/loadProducts',
 async () => {
   const products = await fetchProducts();
   return products;
 }
);

const productsSlice = createSlice({
 name: 'products',
 initialState: {
   items: [
     {
       id: 1,
       title: 'Спиннинг Shimano Catana',
       description: 'Универсальный спиннинг для ловли на блесны и воблеры',
       price: 4500,
       rating: 4.7,
       reviews: 23,
       image: '/assets/fishing-rod.jpg',
       category: 'удилища'
     },
     {
       id: 2,
       title: 'Фидер Daiwa Black Widow',
       description: 'Мощный фидер для дальнего заброса',
       price: 6200,
       rating: 4.9,
       reviews: 15,
       image: '/assets/feeder-rod.jpg',
       category: 'удилища'
     },
     {
       id: 3,
       title: 'Катушка Ryobi Zauber',
       description: 'Безынерционная катушка с плавным ходом',
       price: 3800,
       rating: 4.5,
       reviews: 31,
       image: '/assets/reel.jpg',
       category: 'катушки'
     },
     {
       id: 4,
       title: 'Воблер Megabass Vision 110',
       description: 'Легендарный воблер для ловли щуки и окуня',
       price: 2100,
       rating: 4.8,
       reviews: 42,
       image: '/assets/lure.jpg',
       category: 'приманки'
     },
     {
       id: 5,
       title: 'Плетенка Power Pro',
       description: 'Высококачественная плетеная леска',
       price: 1200,
       rating: 4.6,
       reviews: 28,
       image: '/assets/fishing-line.jpg',
       category: 'лески'
     }
   ],
   status: 'succeeded',
   error: null,
   category: 'all',
   sortBy: 'default',
   searchQuery: '',
 },
 reducers: {
   setCategory: (state, action) => {
     state.category = action.payload;
   },
   setSortBy: (state, action) => {
     console.log('Current State before setSortBy:', state);
     state.sortBy = action.payload;
     console.log('Updated State after setSortBy:', state);
   },
   setSearchQuery: (state, action) => {
     state.searchQuery = action.payload;
   },
 },
 extraReducers: (builder) => {
   builder
     .addCase(loadProducts.pending, (state) => {
       state.status = 'loading';
     })
     .addCase(loadProducts.fulfilled, (state, action) => {
       state.status = 'succeeded';
       state.items = action.payload;
     })
     .addCase(loadProducts.rejected, (state, action) => {
       state.status = 'failed';
       state.error = action.error.message;
     });
 },
});

export const { setCategory, setSortBy, setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
