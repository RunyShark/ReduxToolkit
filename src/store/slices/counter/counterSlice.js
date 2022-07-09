import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 10,
  },
  reducers: {
    //definet reducers
    increment: (state) => {
      state.counter += 1;
    },
    incrementByNumber: (state, actions) => {
      state.counter += actions.payload;
    },
    decremente: (state) => {
      state.counter -= 1;
    },
  },
});

// Action creators
export const { increment, decremente, incrementByNumber } =
  counterSlice.actions;
