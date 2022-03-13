import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getGameDetailsByID } from "../api/game.api";

export const Game = () => {
  const { id } = useParams();

  const query = useQuery(["game-details",id], () => getGameDetailsByID(id));
  const game = query?.data?.data

  return (
    <div className="game">
      <div id="game-page-name">{game?.title}</div>
      <div id="game-page-photo">
        <img src={game?.thumbnail} alt="" />
      </div>

      <div id="game-page-description">
        <p>
          <span>Genre: </span>
          {game?.genre}
        </p>

        <p>
          <span>Platform: </span>
          {game?.platform}
        </p>
        <p>
          <span>Publisher: </span>
          {game?.publisher}
        </p>

        <p>
          <span>Developers: </span>
          {game?.developer}
        </p>

        <p>
          <span>Release Date: </span>
          {game?.release_date}
        </p>

        <p>
          <span>URL: </span>
          <a href={game?.game_url}>{game?.game_url}</a>
        </p>

        <p>
          <span>Description: </span>
          {game?.description}
        </p>
      </div>

      <div id="requirement">
          <p id="main-p-id">Minimum Requirements: </p>
          <p>
            <span>OS: </span>
            {game?.minimum_system_requirements?.os}
          </p>
          <p>
            <span>Processor: </span>
            {game?.minimum_system_requirements?.processor}
          </p>
          <p>
            <span>Memory: </span>
            {game?.minimum_system_requirements?.memory}
          </p>
          <p>
            <span>Graphics: </span>
            {game?.minimum_system_requirements?.graphics}
          </p>
          <p>
            <span>Storage: </span>
            {game?.minimum_system_requirements?.storage}
          </p>
        </div>
    </div>
  );
};
