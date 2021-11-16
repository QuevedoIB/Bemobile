import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: {
    amount: 0
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartAmount: (state, action) => {
      state.cart.amount = action.payload
    }
  }
})

export const { setCartAmount } = cartSlice.actions

export default cartSlice.reducer
