import { createSlice } from '@reduxjs/toolkit';
import { fetchCalories } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejecting = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalories.pending, handlePending)
      .addCase(fetchCalories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCalories.rejected, handleRejecting);
  },
});

export const caloriesReducer = caloriesSlice.reducer;

//Selectors

export const getCalories = (state) => state.calories.items;
export const getIsLoading = (state) => state.calories.isLoading;
export const getError = (state) => state.calories.error;
