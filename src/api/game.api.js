import axios from "axios";

const getGameList = async ()  => {
  var gameListOptions = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "a905a13ac5mshf0c02b98b82f4a0p19d428jsnbcb8fc316e19",
    },
  };
  return axios.request(gameListOptions);
};

const getGameDetailsByID = async (id) => {
  var gameOptions = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: id },
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "a905a13ac5mshf0c02b98b82f4a0p19d428jsnbcb8fc316e19",
    },
  };
  return axios.request(gameOptions);
};

export { getGameList, getGameDetailsByID };
