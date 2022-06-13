import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XwN0xrN2g5U9RffZ_ZOyYJ_2ERKP36w-XpNwgde0rkM",
  },
});
