import React, { Component } from "react";
import "./Footer.css";
import FooterLogo from "../img/footer-logo.png";
import Footerbg from "../img/footer-bg.png";
import FooterImg1 from "../img/footerimg1.jpg";
import FooterImg2 from "../img/footerimg2.jpg";
import FooterImg3 from "../img/footerimg3.jpg";
import ClientImg1 from "../img/client1.jpg";
import ClientImg2 from "../img/client2.jpg";
import ClientImg3 from "../img/client3.jpg";
import ClientImg4 from "../img/client4.jpg";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer footer_section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="side1 text-md-left text-center">
                  <img
                    src={FooterLogo}
                    className="img-fluid mb-md-5 mb-3"
                    accesskey="footer logo"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum
                    dolor sit ame.
                  </p>
                  <img
                    src={Footerbg}
                    className="img-fluid footer_img d-md-block d-none"
                    alt="footer image"
                  />
                </div>
              </div>
              <div className="col-md-4 pr-sm-0">
                <div className="side2 pt-4 px-4">
                  <h4 className="mb-lg-5 mb-md-4 mb-3">Latest Posts</h4>
                  <div className="d-flex flex-column">
                    <div className="d-flex mb-lg-4 mb-md-2 mb-3">
                      <img
                        src={FooterImg1}
                        className="img-fluid footer_blog_img"
                        alt="footer blog"
                      />
                      <div className="footer_blog_content text-left pl-3">
                        <h4 className="footer_blog_date mb-md-2">
                          June 21, 2018
                        </h4>
                        <p className="mb-1">
                          Lorem ipsum dolor sit amet, consectetur adipisc ing
                          ipsum
                        </p>
                        <Link to="#">By Admin</Link>
                      </div>
                    </div>
                    <div className="d-flex mb-lg-4 mb-md-2 mb-3">
                      <img
                        src={FooterImg2}
                        className="img-fluid footer_blog_img"
                        alt="footer blog"
                      />
                      <div className="footer_blog_content text-left pl-3">
                        <h4 className="footer_blog_date mb-md-2">
                          June 21, 2018
                        </h4>
                        <p className="mb-1">
                          Lorem ipsum dolor sit amet, consectetur adipisc ing
                          ipsum
                        </p>
                        <Link to="#">By Admin</Link>
                      </div>
                    </div>
                    <div className="d-flex mb-lg-3 mb-md-1 mb-3">
                      <img
                        src={FooterImg3}
                        className="img-fluid footer_blog_img"
                        alt="footer blog"
                      />
                      <div className="footer_blog_content text-left pl-3">
                        <h4 className="footer_blog_date mb-md-2">
                          June 21, 2018
                        </h4>
                        <p className="mb-1">
                          Lorem ipsum dolor sit amet, consectetur adipisc ing
                          ipsum
                        </p>
                        <Link to="#">By Admin</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 pr-sm-0">
                <div className="side3 pt-4 px-4 my-sm-0 my-4">
                  <h4 className="mb-lg-5 mb-4">Top Comments</h4>
                  <div className="d-flex flex-column">
                    <div className="d-flex mb-3">
                      <img
                        src={ClientImg1}
                        className="img-fluid client_image"
                        alt="client image"
                      />
                      <div className="d-flex flex-column comment_content text-left pl-4">
                        <p className="mb-md-1">
                          James Smith on Lorem ipsum dolor sit amet, co
                        </p>
                        <span className="comment_date">June 21, 2018</span>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <img
                        src={ClientImg2}
                        className="img-fluid client_image"
                        alt="client image"
                      />
                      <div className="d-flex flex-column comment_content text-left pl-4">
                        <p className="mb-md-1">
                          James Smith on Lorem ipsum dolor sit amet, co
                        </p>
                        <span className="comment_date">June 21, 2018</span>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <img
                        src={ClientImg3}
                        className="img-fluid client_image"
                        alt="client image"
                      />
                      <div className="d-flex flex-column comment_content text-left pl-4">
                        <p className="mb-md-1">
                          James Smith on Lorem ipsum dolor sit amet, co
                        </p>
                        <span className="comment_date">June 21, 2018</span>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <img
                        src={ClientImg4}
                        className="img-fluid client_image"
                        alt="client image"
                      />
                      <div className="d-flex flex-column comment_content text-left pl-4">
                        <p className="mb-md-1">
                          James Smith on Lorem ipsum dolor sit amet, co
                        </p>
                        <span className="comment_date">June 21, 2018</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second_footer">
            <div className="container">
              <h4 className="p-3 text-center">
                Copyright &copy; 2020 All rights reserved | This template is
                made with <i className="fa fa-heart-o"></i> by Colorlib
              </h4>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
