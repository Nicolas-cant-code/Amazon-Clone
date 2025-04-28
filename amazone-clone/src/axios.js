import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/zaio--clone-4a018/us-central1/api",
});

export default instance;
