import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice';
import wishlistSlice from './slice/wishlistSlice';
import cartSlice from './slice/cartSlice'

const cartStore = configureStore({
  reducer: {
    products: productSlice, // Matches the state name used in components
    wishlist: wishlistSlice, // Changed from 'wishListReducer' to 'wishlist'
    cartReducer:cartSlice

  }
});

export default cartStore;
