import { createTask, getTaskLists } from "../taskApi.js";
import {
  requestPending,
  addTaskSuccess,
  requestFail,
  fetchTaskSuccess,
} from "./taskSlice.js";

export const addTask = (FrmDt) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await createTask(FrmDt);
    // call the api to sent the data
    dispatch(addTaskSuccess(result));
    result.status === "success" && dispatch(fetchTaskLists());
  } catch (error) {
    dispatch(requestFail(error.message));
  }
};

export const fetchTaskLists = () => async (dispatch) => {
  try {
    dispatch(requestPending());

    const taskArg = await getTaskLists();
    dispatch(fetchTaskSuccess(taskArg));
  } catch (error) {
    dispatch(requestFail(error.message));
  }
};
