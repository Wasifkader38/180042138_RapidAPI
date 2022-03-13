import React from "react";
import { Header } from "../components/Header";
import { GameList } from "../components/GameList";
import "./Home.css"

export const Home = () => {
  return (
    <>
      <Header />
      <GameList />
    </>
  );
};
