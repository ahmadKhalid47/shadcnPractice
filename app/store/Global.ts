import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: true,
};

export const GlobalSlice = createSlice({
  name: "Global",
  initialState,
  reducers: {
    setsidebarOpenR: (state, action) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const {
  setsidebarOpenR,
} = GlobalSlice.actions;

export default GlobalSlice.reducer;
