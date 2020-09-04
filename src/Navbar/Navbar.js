import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../img/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="#" id="scroll" style={{ display: "none" }}>
          <i className="fa fa-arrow-up"></i>
        </Link>
        <nav
          className="navbar navbar-expand-md navbar-dark py-md-3"
          id="navbar"
        >
          <div className=" container">
            <Link to="#" className="navbar-brand">
              <img src={Logo} className="img-fluid" alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-md-flex justify-content-center"
              id="collapsibleNavbar"
            >
              <ul className="nav navbar-nav">
                <li className="nav-item mr-lg-3 mr-md-1">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item mr-lg-3 mr-md-1">
                  <Link to="/games" className="nav-link">
                    Games
                  </Link>
                </li>
                <li className="nav-item mr-lg-3 mr-md-1">
                  <Link to="/tournament" className="nav-link">
                    Tournament
                  </Link>
                </li>
                <li className="nav-item mr-lg-3 mr-md-1">
                  <Link to="/review" className="nav-link">
                    Review
                  </Link>
                </li>
              </ul>
              <button className="btn login_btn d-md-none" type="button">
                Login &#47; Registration
              </button>
            </div>
            <button
              className="btn login_btn d-md-block d-none px-3"
              type="button"
            >
              Login &#47; Registration
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
