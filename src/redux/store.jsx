import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './CartSlice'
import productReducer from '../redux/productSlice/'
import cartReducer from '../redux/cartSlice/'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    product:productReducer,
  },
})