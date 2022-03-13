import React from "react";
import { useState } from "react";
import { useSort } from "../hooks/useSort";
import { Game } from "./Game";
import { useQuery } from "react-query";
import { getGameList } from "../api/game.api";

export const GameList = () => {
  const query = useQuery("games", getGameList);
  return (
    <>
    {query?.data?.data != null ?
      <List games={query?.data?.data} />
      :
      <></>
    }
    </>
  );
};

const List = ({ games }) => {
  const [data, setData] = useState(games);
  const { sort } = useSort();

  console.log(data);
  const selectSort = (key) => {
    setData(sort(data, key));
  };

  return (
    <>
      <div id="dropdown">
        <p>Sort By:</p>
        <select onChange={(e) => selectSort(e.target.value)}>
          <option value="title">Alphabatically</option>
          <option value="genre">Genre</option>
          <option value="platform">Platform</option>
          <option value="release_date">Release Date</option>
        </select>
      </div>

      <div id="game-list">
        {data?.map((game, index) => {
          return <Game key={game.id} game={game} />;
        })}
      </div>
    </>
  );
};
