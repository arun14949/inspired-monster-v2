import axios from "axios";

export const getMediumArticles = async () =>
  await axios.get("/api/medium");
