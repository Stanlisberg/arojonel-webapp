import { createSlice } from "@reduxjs/toolkit";
interface CartInter {
  cartItems: any[];
  quantity: number;
}

const initialState: CartInter = {
  cartItems: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (cartIndex >= 0) {
        state.cartItems[cartIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cartItems.push(product);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
