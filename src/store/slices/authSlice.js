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
      console.log('hydrate ', action.payload);
      // return {
      //   ...state,
      //   ...action.payload.authRedux,
      // };
      if (action.payload.auth.name !== undefined) {
        return state;
      } 
       state = {
        name: action.payload.auth.name,
        role: action.payload.auth.role,
        token:action.payload.auth.token
       }
      
       // preserve count value on client side navigation
      // return nextState;
    })
  }
});

// Action creators are generated for each case reducer function
export const { changeName, changeRole, changeToken } =
  authSlice.actions;

export default authSlice;
