import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8888", // Spring Boot 后端地址
  timeout: 5000,
});

export default service;
