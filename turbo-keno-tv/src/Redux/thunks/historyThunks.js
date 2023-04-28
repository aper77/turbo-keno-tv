import { createAsyncThunk } from '@reduxjs/toolkit';
import { setHistory } from '../reducers/historySlice';
import axios from 'axios';

// export const history = {
//   drawNums: [
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     '11',
//     '12',
//     '13',
//     '14',
//     '15',
//     '16',
//     '17',
//     '18',
//     '19',
//     '20',
//   ],
//   history: [
//     { id: '1', r: '1,2,3,4,5,6,23,45,12,34,25,21,35,65,67,68,13,80,54,29' },
//     { id: '2', r: '1,2,3,4,5,6,24,45,12,34,25,21,35,77,67,65,13,80,54,29' },
//     { id: '3', r: '1,2,3,4,5,6,23,45,12,34,25,21,35,43,67,65,13,80,54,28' },
//   ],
//   currentDrawId: '4',
//   nextDrawId: '5',
// };

export const getHistory = createAsyncThunk(
  'history/getHistory',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(
        `http://oliver.energaming.systems:20035/api/v1/get-draw-results`,
        {
          params: {
            token: 'test-frontend-token',
            duration: 3,
            page: 0,
          },
        },
      );
      dispatch(setHistory(response.data.data));
      return history;
    } catch (error) {
      throw new Error('Error fetching limits data');
    }
  },
);
