import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
