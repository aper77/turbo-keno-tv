import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMarkets } from '../reducers/marketSlice';
import axios from 'axios';

export const getMarkets = createAsyncThunk(
  'markets/getMarkets',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        `http://oliver.energaming.systems:20035/api/v1/markets/get`,
        {
          params: {
            token: 'test-frontend-token',
            duration: 3,
            page: 0,
          },
        },
      );
      dispatch(setMarkets(response.data.data));
      return true;
    } catch (error) {
      throw new Error('Error fetching markets data');
    }
  },
);
