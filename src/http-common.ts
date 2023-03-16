import axios from "axios";

export default axios.create({
  baseURL: "https://school-restaurant-api.azurewebsites.net",
  headers: {
    "Content-type": "application/json"
  }
});