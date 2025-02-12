import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },

    removeItem: (state, action) => {
      state = state.filter((state) => state.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id == action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id == action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((item) => item.id !== action.payload); // Remove item if quantity is 0
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice;
