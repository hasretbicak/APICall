import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID g2Ed2a-q2d3dFu2HGhbXwl8x_EC_xMa7Pk3jbtcOqeU",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImages;
