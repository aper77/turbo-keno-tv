import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setTimer } from '../reducers/timerSlice';

export const getTimer = createAsyncThunk(
  'timer/getTime',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        `http://oliver.energaming.systems:20035/api/v1/get-seconds-till-draw`,
        {
          params: {
            token: 'test-frontend-token',
            duration: 3,
            page: 0,
          },
        },
      );
      dispatch(setTimer(response.data.data));
      return true;
    } catch (error) {
      throw new Error('Error fetching timer data');
    }
  },
);
