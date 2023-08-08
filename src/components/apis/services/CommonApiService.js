import instance from "../ApiConfig";
import { ApiEndPoints } from "../ApiEndPoints";

export const createRecord = async (data, url) => {
  try {
    const result = await instance({
      url: url,
      method: "POST",
      data,
    });
    // return result;
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const updateRecord = async (data, id, url) => {
  try {
    const result = await instance({
      url: url + `/${id}`,
      method: "PUT",
      data,
    });
    // return result;
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRecord = async (id, url) => {
  try {
    const result = await instance({
      url: url + `/${id}`,
      method: "DELETE",
    });
    // return result;
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getRecord = async (id, url) => {
  try {
    const result = await instance({
      url: url + `/${id}`,
      method: "GET",
    });
    // return result;
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const fetchList = async (url) => {
  try {
    const result = await instance({
      url: url,
      method: "GET",
    });
    // return result;
    return result.data;
  } catch (error) {
    throw error;
  }
};