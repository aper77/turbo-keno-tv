import { configureStore } from '@reduxjs/toolkit';
import historySlice from '../reducers/historySlice';
import marketSlice from '../reducers/marketSlice';
import frequencySlice from '../reducers/frequencySlice';
import timerSlice from '../reducers/timerSlice';
import limitsSlice from '../reducers/limitsSlice';

export const store = configureStore({
  reducer: {
    limits: limitsSlice,
    frequency: frequencySlice,
    markets: marketSlice,
    history: historySlice,

    timer: timerSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
