import React, { Component } from "react";
import ReviewImg1 from "../img/reviewimage1.jpg";
import ReviewImg2 from "../img/reviewimage2.jpg";
import ReviewImg3 from "../img/reviewimage3.jpg";
import ReviewImg4 from "../img/reviewimage4.jpg";
import "./Review.css";

class Review extends Component {
  render() {
    return (
      <div>
        <section className="review_section">
          <div className="container">
            <div className="row">
              <div className="heading d-flex flex-column align-items-xl-center align-items-sm-start align-items-center w-100">
                <button type="button" className="btn box px-4 py-1">
                  NEW
                </button>
                <h5 className="title pt-2">Recent Reviews</h5>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="review_box mb-lg-0 mb-5">
                  <div className="image mb-4">
                    <img
                      src={ReviewImg1}
                      className="img-fluid"
                      alt="review image"
                    />
                  </div>
                  <div className="rating1 d-flex align-items-center justify-content-center">
                    9&#46;3
                  </div>
                  <div className="review_box_content text-center">
                    <h4 className="review_box_title mb-md-3">
                      Assasin&#39;s Creed
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
                      dolor sit ame.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="review_box mb-lg-0 mb-5">
                  <div className="image mb-4">
                    <img
                      src={ReviewImg2}
                      className="img-fluid"
                      alt="review image"
                    />
                  </div>
                  <div className="rating2 d-flex align-items-center justify-content-center">
                    9&#46;5
                  </div>
                  <div className="review_box_content text-center">
                    <h4 className="review_box_title mb-md-3">Doom</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
                      dolor sit ame.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="review_box mb-lg-0 mb-5">
                  <div className="image mb-4">
                    <img
                      src={ReviewImg3}
                      className="img-fluid"
                      alt="review image"
                    />
                  </div>
                  <div className="rating3 d-flex align-items-center justify-content-center">
                    9&#46;1
                  </div>
                  <div className="review_box_content text-center">
                    <h4 className="review_box_title mb-md-3">Overwatch</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
                      dolor sit ame.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="review_box">
                  <div className="image mb-4">
                    <img
                      src={ReviewImg4}
                      className="img-fluid"
                      alt="review image"
                    />
                  </div>
                  <div className="rating4 d-flex align-items-center justify-content-center">
                    9&#46;7
                  </div>
                  <div className="review_box_content text-center">
                    <h4 className="review_box_title mb-md-3">GTA</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
                      dolor sit ame.
                    </p>
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

export default Review;
