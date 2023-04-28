import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  maxBet: null,
  minBet: null,
  maxWin: null,
  currency: null,
  error: null,
  lastWinAmount: null,
};

export const limitsSlice = createSlice({
  name: 'limits',
  initialState,
  reducers: {
    setLimits: (state, action) => {
      state.maxBet = action.payload.maximalBet;
      state.minBet = action.payload.minimalBet;
      state.maxWin = action.payload.maxWin;
      state.currency = action.payload.currency;
      state.lastWinAmount = action.payload.lastWinAmount;
    },
  },
});

export const { setLimits } = limitsSlice.actions;

export default limitsSlice.reducer;
