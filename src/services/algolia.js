import config from "./config";

export const getAbout = async () => await config.get("/about");

export const updateAbout = async (data) =>
  await config.put(`/about/settings`, {
    data,
  });

export const getJobs = async () => await config.get("/jobs");

export const getprojects = async () => await config.get("/projects");
