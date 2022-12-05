import axios from "axios";

export default axios.create({
  baseURL: "http://45.32.136.182:7070/",
  headers: {
    "Content-type": "application/json"
  }
});