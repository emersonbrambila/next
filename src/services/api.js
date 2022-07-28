import axios from "axios";

const mainApi = process.env.NEXT_PUBLIC_API;

const api = axios.create({
  baseURL: mainApi,
});

export default api;
