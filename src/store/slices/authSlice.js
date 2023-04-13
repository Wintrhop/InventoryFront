'use client';
import { createSlice } from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper"

const initialState = {
  
  name: "",
  role: "",
  token: "",
};

export const authSlice = createSlice({
  name: "authRedux",
  initialState,
  reducers: {
    
    changeName: (state, action) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    changeRole: (state, action) => {
      return {
        ...state,
        role: action.payload,
      };
    },
    changeToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.authRedux,
      };
    })
  }
});

// Action creators are generated for each case reducer function
export const { changeName, changeRole, changeToken } =
  authSlice.actions;

export default authSlice;
