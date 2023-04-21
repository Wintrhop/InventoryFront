
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
      console.log(' inicio hydrate ', state);
      if (!action.payload.auth.name) {
        console.log('fin hydrate en el if ', state);
        return state;
      }
      state.name = action.payload.auth.name;
      state.role = action.payload.auth.role;
      state.token = action.payload.auth.token;
      console.log('fin hydrate fuera del if ', state);
     
       // preserve count value on client side navigation
      
    })
  }
});

// Action creators are generated for each case reducer function
export const { changeName, changeRole, changeToken } =
  authSlice.actions;

export default authSlice;
