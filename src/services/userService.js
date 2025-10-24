import API from "../helper/axios";

export const userLogin = async (payload) => {
  const { data } = await API.post("/login", payload);
  return data;
};
