import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  taskLists: [],
  noToDoList: [],
  totalHrs: 0,
  isPending: false,
  status: "success",
  message: "",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isPending = true;
    },
    addTaskSuccess: (state, action) => {
      state.isPending = false;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    fetchTaskSuccess: (state, { payload = [] }) => {
      state.isPending = false;
      state.totalHrs = payload.reduce((subTtl, row) => subTtl + +row.hr, 0);
      state.taskLists = payload.filter((row) => row.todo);
      state.noToDoList = payload.filter((row) => !row.todo);
    },
    requestFail: (state, { payload }) => {
      state.isPending = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = taskSlice;

export const {
  requestPending,
  addTaskSuccess,
  requestFail,
  fetchTaskSuccess,
} = actions;
export default reducer;
