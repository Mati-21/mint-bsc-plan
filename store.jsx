import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./src/slices/mainSlice";
import sidebarSlice from "./src/slices/sidebarSlice";
import mainSidebarSlice from "./src/slices/mainSidebarSlice";

const store = configureStore({
  reducer: {
    adminMain: mainSlice,
    adminSide: sidebarSlice,
    mainSideBar: mainSidebarSlice,
  },
});

export default store;
