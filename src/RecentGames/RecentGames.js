import React, { Component } from "react";
import RecentImg1 from "../img/recentimg1.jpg";
import RecentImg2 from "../img/recentimg2.jpg";
import RecentImg3 from "../img/recentimg3.jpg";
import "./RecentGames.css";
import { Link } from "react-router-dom";

class RecentGames extends Component {
  render() {
    return (
      <div>
        <section className="recent_games">
          <div className="container">
            <div className="row">
              <div className="heading d-flex flex-column align-items-center w-100">
                <button type="button" className="btn box px-4 py-1">
                  NEW
                </button>
                <h5 className="title pt-2">Recent Games</h5>
              </div>
              <div className="col-md-4">
                <div className="blog_box mb-md-0 mb-4">
                  <div className="image">
                    <img
                      src={RecentImg1}
                      className="img-fluid"
                      alt="game image"
                    />
                  </div>
                  <div className="box">
                    <button type="button" className="btn tag_box1 px-4 py-1">
                      NEW
                    </button>
                    <div className="box_content p-md-4 p-3">
                      <h4>Suspendisse ut justo tem por, rutrum</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link to="#">3 Comments</Link>
                    </div>
                    <div className="like_btns d-flex">
                      <button type="button" className="btn star_btn">
                        <i className="fa fa-star-o"></i>
                      </button>
                      <button type="button" className="btn heart_btn">
                        <i className="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_box mb-md-0 mb-4">
                  <div className="image">
                    <img
                      src={RecentImg2}
                      className="img-fluid"
                      alt="game image"
                    />
                  </div>
                  <div className="box">
                    <button type="button" className="btn tag_box2 px-4 py-1">
                      RACING
                    </button>
                    <div className="box_content p-md-4 p-3">
                      <h4>Susce pulvinar metus nulla, vel facilisis sem</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link to="#">3 Comments</Link>
                    </div>
                    <div className="like_btns d-flex">
                      <button type="button" className="btn star_btn">
                        <i className="fa fa-star-o"></i>
                      </button>
                      <button type="button" className="btn heart_btn">
                        <i className="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog_box">
                  <div className="image">
                    <img
                      src={RecentImg3}
                      className="img-fluid"
                      alt="game image"
                    />
                  </div>
                  <div className="box">
                    <button type="button" className="btn tag_box3 px-4 py-1">
                      ADVENTURE
                    </button>
                    <div className="box_content p-md-4 p-3">
                      <h4>Suspendisse ut justo tem por, rutrum</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link to="#">3 Comments</Link>
                    </div>
                    <div className="like_btns d-flex">
                      <button type="button" className="btn star_btn">
                        <i className="fa fa-star-o"></i>
                      </button>
                      <button type="button" className="btn heart_btn">
                        <i className="fa fa-heart-o"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RecentGames;
