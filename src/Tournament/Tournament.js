import React, { Component } from "react";
import TournamentImg1 from "../img/tournament1.jpg";
import TournamentImg2 from "../img/tournament2.jpg";
import "./Tournament.css";

class Tournament extends Component {
  render() {
    return (
      <div>
        <section className="tournament_section">
          <div className="container">
            <div className="heading_title py-2 px-3">TOURNAMENTS</div>
            <div className="row">
              <div className="col-md-6">
                <div className="tournament_main_box mb-md-0 mb-4">
                  <div className="title py-2 px-3">PREMIUM TOURNAMENT</div>
                  <div className="row px-4 py-5">
                    <div className="col-sm-4 text-sm-left text-center">
                      <img
                        src={TournamentImg1}
                        className="img-fluid tournament_img"
                        alt="tournament image"
                      />
                    </div>
                    <div className="col-sm-8 pl-md-0 pr-md-0">
                      <div className="tournament_content text-left text-center mt-sm-0 mt-3">
                        <h4>World Of WarCraft</h4>
                        <div className="d-flex justify-content-sm-start justify-content-center mb-1 mt-3">
                          <span className="box_title">
                            Tournament Beggins &#58;
                          </span>
                          <span className="box_title_content pl-md-1">
                            June 20, 2018
                          </span>
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center mb-1">
                          <span className="box_title">
                            Tounament Ends &#58;
                          </span>
                          <span className="box_title_content pl-md-1">
                            July 01, 2018
                          </span>
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center mb-1">
                          <span className="box_title">Participants &#58;</span>
                          <span className="box_title_content pl-md-1">
                            10 teams
                          </span>
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center mb-3">
                          <span className="box_title">
                            Tournament Author &#58;
                          </span>
                          <span className="box_title_content pl-md-1">
                            Admin
                          </span>
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                          <span className="box_last_title">Prices &#58;</span>
                          <span className="box_title_content pl-md-1">
                            1st place $2000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tournament_main_box">
                  <div className="title py-2 px-3">PREMIUM TOURNAMENT</div>
                  <div className="row px-4 py-5">
                    <div className="col-sm-4 text-sm-left text-center">
                      <img
                        src={TournamentImg2}
                        className="img-fluid tournament_img"
                        alt="tournament image"
                      />
                    </div>
                    <div className="col-sm-8">
                      <div className="tournament_content text-left text-center mt-sm-0 mt-3">
                        <h4>DOOM</h4>
                        <div className="d-flex justify-content-sm-start justify-content-center mb-1 mt-3">
                          <span className="box_title">
                            Tournament Beggins &#58;
                          </span>
                          <span className="box_title_content pl-md-1">
                            June 20, 2018
                          </span>
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center mb-1">
                          <span className="box_title">
                            Tounament Ends &#58;
                          </span>
                          <span className="box_title_content pl-md-1">
                            July 01, 2018
                          </span>
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center mb-1">
                          <span className="box_title">Participants &#58;</span>
                          <span className="box_title_content pl-md-1">
                            10 teams
                          </span>
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center mb-3">
                          <span className="box_title">
                            Tournament Author &#58;
                          </span>
                          <span className="box_title_content pl-md-1">
                            Admin
                          </span>
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center">
                          <span className="box_last_title">Prices &#58;</span>
                          <span className="box_title_content pl-md-1">
                            1st place $2000
                          </span>
                        </div>
                      </div>
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

export default Tournament;
