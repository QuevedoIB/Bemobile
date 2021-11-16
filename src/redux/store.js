import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '@/redux/reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})
