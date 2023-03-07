import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  authState: boolean;
  name: string;
}

// Initial state
const initialState: AuthState = {
  authState: false,
  name: "",
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setNameState(state, action) {
      state.name = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState, setNameState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;
export const selectName = (state: AppState) => state.auth.name;

export default authSlice.reducer;
