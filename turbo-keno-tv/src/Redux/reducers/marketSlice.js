import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  markets: [],
};

export const marketSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    setMarkets: (state, action) => {
      state.markets = action.payload;
    },
  },
});

export const { setMarkets } = marketSlice.actions;

export default marketSlice.reducer;
