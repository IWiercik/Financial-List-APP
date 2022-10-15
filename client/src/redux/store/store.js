import { configureStore } from '@reduxjs/toolkit';
import usersReducer from 'redux/slices/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
