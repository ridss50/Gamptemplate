import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GameHighlight.css";

class GameHighlight extends Component {
  render() {
    return (
      <div>
        <section className="game_highlight my-5 py-md-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 px-0">
                <div className="main_box1">
                  <div className="box1">
                    <button type="button" className="btn tag_box px-4 py-1">
                      NEW
                    </button>
                    <div className="box_content p-md-4 p-3">
                      <h4>Suspendisse ut justo tem por, rutrum</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link to="#">3 Comments</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 px-0">
                <div className="main_box2">
                  <div className="box2">
                    <button type="button" className="btn tag_box px-4 py-1">
                      STRATEGY
                    </button>
                    <div className="box_content p-md-4 p-3">
                      <h4>Justo tempor, rutrum erat id, molestie</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link to="#">3 Comments</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 px-0">
                <div className="main_box3">
                  <div className="box3">
                    <button type="button" className="btn tag_box px-4 py-1">
                      NEW
                    </button>
                    <div className="box_content p-md-4 p-3">
                      <h4>Nullam lacinia ex eleifend orci porttitor</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link to="#">3 Comments</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 px-0">
                <div className="main_box4">
                  <div className="box4">
                    <button type="button" className="btn tag_box px-4 py-1">
                      RACING
                    </button>
                    <div className="box_content p-md-4 p-3">
                      <h4>Lacinia ex eleifend orci suscipit</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link to="#">3 Comments</Link>
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
export default GameHighlight;
