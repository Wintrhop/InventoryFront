'use client';
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import {createWrapper} from 'next-redux-wrapper';


const makeStore = (context) =>
  configureStore({
    reducer: {
      auth: authReducer.reducer,
    },
    devTools: true,
  });

  export const wrapper = createWrapper(makeStore);