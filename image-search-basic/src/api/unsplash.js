import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID grbXUj7FGtCgfkSYpiSPtauf6ZPbPZFWIPeGS0r3rKA",
  },
});
