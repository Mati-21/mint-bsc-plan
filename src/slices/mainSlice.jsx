import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminInfo: true,
  activeChart: "line",
  modalState: false,
  activeAction: 1,
  layoutRatio: true,
};

const mainSlice = createSlice({
  name: "adminMain",
  initialState,
  reducers: {
    barChart(state) {
      state.activeChart = "bar";
    },
    lineChart(state) {
      state.activeChart = "line";
    },
    openModal(state, action) {
      state.modalState = true;
      state.activeAction = action.payload;
      state.layoutRatio = true;
    },
    closeModal(state) {
      state.modalState = false;
    },
    actionActivator(state, action) {
      if (action.payload !== 1) {
        state.layoutRatio = false;
      }
      state.activeAction = action.payload;
    },
  },
});

export const {
  barChart,
  lineChart,
  openModal,
  closeModal,
  actionActivator,
  layoutRatio,
} = mainSlice.actions;
export default mainSlice.reducer;
