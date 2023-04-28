import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawNums: [],
  history: [],
  currentDrawId: '',
  nextDrawId: '',
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, action) => {
      state.drawNums = action.payload.lastRaces[0].r.match(/\d+/g);
      const firstFourItems = action.payload.lastRaces.slice(1, 4);
      state.history = firstFourItems;
      state.currentDrawId = action.payload.lastRaces[0].id;
      state.nextDrawId = action.payload.drawInfo.drawId;
    },
  },
});

export const { setHistory } = historySlice.actions;

export default historySlice.reducer;
