import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: true,
  show: true,
};

const mainSidebarSlice = createSlice({
  name: "mainSidebar",
  initialState,
  reducers: {
    toggleMainSidenav(state) {
      state.open = !state.open;
    },
    showMainSidenav(state) {
      state.show = !state.show;
    },
  },
});

export const { toggleMainSidenav, showMainSidenav } = mainSidebarSlice.actions;
export default mainSidebarSlice.reducer;
