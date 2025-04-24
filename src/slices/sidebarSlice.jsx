import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  open: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openMenu(state, action) {
      state.index = action.payload;
    },
    toggleAdminSideBar(state) {
      state.open = !state.open;
    },
  },
});

export const { openMenu, toggleAdminSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
