import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { caloriesReducer } from './calories/caloriesSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    calories: caloriesReducer,
  },
});
