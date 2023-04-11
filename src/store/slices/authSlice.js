'use client';
import { createSlice } from "@reduxjs/toolkit";

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
});

// Action creators are generated for each case reducer function
export const { changeName, changeRole, changeToken } =
  authSlice.actions;

export default authSlice.reducer;
