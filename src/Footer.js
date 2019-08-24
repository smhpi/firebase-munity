import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="site-footer">
          <div className="footerMenu">
            <h3>Computer Depot</h3>
            <a href="#">About Us</a>
            <a href="#">search</a>
          </div>
          <div className="footerMenu">
            <h3>Customer Portal</h3>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Return and Warranty Policy</a>
          </div>
          <div className="footerMenu">
            <h3>Follow Us</h3>
            <div className="social">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span>
            &copy; 2019 - lenovosellers.com. Powered by Hosen Poursaeid
          </span>
        </div>
      </footer>
    );
  }
}
export default Footer;
