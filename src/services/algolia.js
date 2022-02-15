import config from "./config";

export const getAbout = async () => await config.get("/about");
