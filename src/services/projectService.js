import API from "../helper/axios";

export const getAllProjects = async (payload) => {
  const { data } = await API.get("/project", payload);
  return data;
};

export const uploadProject = async (formData) => {
  const { data } = await API.post("/project", formData);
  return data;
};
