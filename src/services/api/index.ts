import axios from "axios";

//axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});