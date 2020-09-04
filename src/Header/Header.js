import React, { Component } from "react";
import SliderImg1 from "../img/slider-1.jpg";
import SliderImg2 from "../img/slider-2.jpg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active">
                01.
              </li>
              <li data-target="#demo" data-slide-to="1">
                02.
              </li>
            </ul>
            <div className="carousel-inner slidercontentback">
              <div className="carousel-item active">
                <img
                  src={SliderImg1}
                  className="img-fluid mt-5"
                  alt="slider1"
                />
                <div className="container">
                  <div className="slidercontentmain text-left">
                    <div className="title_main">
                      <span>
                        The Best <span className="title_main_color">Games</span>{" "}
                        Out There
                      </span>
                    </div>
                    <p className="content_description my-md-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus.
                    </p>
                    <button
                      type="button"
                      className="btn read_more_btn p-md-3 mb-md-5"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={SliderImg2}
                  className="img-fluid mt-5"
                  alt="slider2"
                />
                <div className="container">
                  <div className="slidercontentmain text-left">
                    <div className="title_main">
                      <span>
                        The Best <span className="title_main_color">Games</span>{" "}
                        Out There
                      </span>
                    </div>
                    <p className="content_description my-md-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus.
                    </p>
                    <button type="button" className="btn read_more_btn p-md-3">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
