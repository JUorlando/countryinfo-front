import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8888",
  timeout: 3000,
});