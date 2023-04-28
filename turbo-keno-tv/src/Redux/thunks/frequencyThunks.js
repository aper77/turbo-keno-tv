import { createAsyncThunk } from '@reduxjs/toolkit';
import { setFrequency } from '../reducers/frequencySlice';
import axios from 'axios';

export const getFrequency = createAsyncThunk(
  'frequency/getFrequency',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        `http://oliver.energaming.systems:20035/api/v1/get-generic-info`,
        {
          params: {
            token: 'test-frontend-token',
            duration: 3,
            page: 0,
          },
        },
      );
      const { hotBalls, coldBalls } = response.data.data.ballFrequency['100'];

      const hotNums = hotBalls.map(el => el[0]);
      const coldNums = coldBalls.map(el => el[0]);

      dispatch(setFrequency({ hotNums, coldNums }));
      return true;
    } catch (error) {
      throw new Error('Error fetching limits data');
    }
  },
);
