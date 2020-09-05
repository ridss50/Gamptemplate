import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Review from "../Review/Review";
import Tournament from "../Tournament/Tournament";
import RecentGames from "../RecentGames/RecentGames";
import Footer from "../Footer/Footer";

class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/games" component={RecentGames} />
            <Route path="/tournament" component={Tournament} />
            <Route path="/review" component={Review} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default Menu;
