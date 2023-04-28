import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLimits } from '../reducers/limitsSlice';
import axios from 'axios';

export const getLimits = createAsyncThunk(
  'limits/getLimits',
  async (_, { dispatch }) => {
    try {
      const responseLimits = await axios.get(
        'http://oliver.energaming.systems:20035/api/v1/get-game-versions',
        {
          params: {
            token: 'test-frontend-token',
            duration: 3,
            page: 0,
          },
        },
      );
      dispatch(setLimits(responseLimits.data.data));
      return true;
    } catch (error) {
      console.error('Error fetching limits data:', error);
      throw new Error('Error fetching limits data');
    }
  },
);
