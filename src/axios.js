import axios from "axios";
// axios.defaults.withCredentials = true;
export const HTTP = axios.create({
  baseURL: `https://4c47-197-248-70-213.eu.ngrok.io/`,
  headers: {
    Authorization: "Bearer {token}",
  },
});
