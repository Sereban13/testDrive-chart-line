import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6521778fa4199548356d3ed4.mockapi.io/api/s7';

export const fetchCalories = createAsyncThunk(
  'calories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/calories');
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
