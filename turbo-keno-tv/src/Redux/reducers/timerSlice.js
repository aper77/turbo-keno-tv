import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  timer: null,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action) => {
      state.timer = action.payload.secondsTillDraw;
    },
  },
});

export const { setTimer } = timerSlice.actions;

export default timerSlice.reducer;
