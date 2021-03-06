import axios from "axios";

const rootUrl = " http://localhost:5000/api/v1";

export const createTask = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(rootUrl, frmData);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      resolve({
        status: "error",
        message: error.message,
      });
    }
  });
};

export const getTaskLists = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(rootUrl);
      console.log(data);
      resolve(data.result);
    } catch (error) {
      console.log(error);
      resolve({
        status: "error",
        message: error.message,
      });
    }
  });
};

export const deletTaskLists = (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(rootUrl, { data: ids });
      console.log(data);
      resolve(data);
    } catch (error) {
      console.log(error);
      resolve(false);
    }
  });
};

export const switchTask = (todo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(rootUrl, { todo });

      console.log(data);
      resolve(data);
    } catch (error) {
      console.log(error);
      resolve(false);
    }
  });
};
