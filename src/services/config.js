import axios from "axios";

const config = axios.create({
  baseURL: `https://${import.meta.env.VITE_APP_ID}-dsn.algolia.net/1/indexes`,
  headers: {
    "X-Algolia-API-Key": import.meta.env.VITE_API_KEY,
    "X-Algolia-Application-Id": import.meta.env.VITE_APP_ID,
  },
});

export default config;
