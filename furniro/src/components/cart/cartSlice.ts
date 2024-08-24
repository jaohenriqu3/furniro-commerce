import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantityItens: 0,
  teste: "testando",
};

const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantityItens += 1;
    },
    decrement: (state) => {
      state.quantityItens -= 1;
    },
  },
});

export const { increment, decrement } = cartSlicer.actions;
export const cartReducer = cartSlicer.reducer;
