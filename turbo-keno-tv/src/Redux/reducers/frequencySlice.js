import { createSlice } from '@reduxjs/toolkit';
import { getFrequency } from '../thunks/frequencyThunks';

const initialState = {
  hotNums: [],
  coldNums: [],
};

export const frequencySlice = createSlice({
  name: 'frequency',
  initialState,
  reducers: {
    setFrequency: (state, action) => {
      state.hotNums = action.payload.hotNums;
      state.coldNums = action.payload.coldNums;
    },
  },
});

export const { setFrequency } = frequencySlice.actions;

export default frequencySlice.reducer;
