import React from "react";
import "./Home.css";
import Main from "./Main";
import Particles from './Particles'

export default function Home() {
  return (
    <div className="home-container">
      <Particles />
      <Main />
    </div>
  );
}