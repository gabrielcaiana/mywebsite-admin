import config from "./config";

export const getAbout = async () => await config.get("/about");

export const updateAbout = async (data) =>
  await config.put(`/about/${data.objectID}`, {
    data,
  });
