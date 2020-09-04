import React, { Component } from "react";
import Header from "../Header/Header";
import GameHighlight from "../GameHighlight/GameHighlight";
import RecentGames from "../RecentGames/RecentGames";
import Tournament from "../Tournament/Tournament";
import Review from "../Review/Review";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <GameHighlight />
        <RecentGames />
        <Tournament />
        <Review />
      </div>
    );
  }
}

export default Home;
