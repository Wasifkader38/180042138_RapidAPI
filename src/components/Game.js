import React from "react";
import { Link } from "react-router-dom";
export const Game = ({ game }) => {

  return (
    <Link to={`game/${game.id}`}>
      <div id="game-container" >
        <img src={game.thumbnail} alt="" />
        <div className="game-details">
          <div id="game_description">
            <p id="game-title">{game.title}</p>
            <p id="game-genre">{game.genre}</p>
            <p id="game-platform">{game.platform}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
