import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="site-footer">
          <div className="footerMenu">
            <h3>Computer Depot</h3>
            <Link to="#">About Us</Link>
            <Link to="#">search</Link>
          </div>
          <div className="footerMenu">
            <h3>Customer Portal</h3>
            <Link to="#">Contact Us</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Return and Warranty Policy</Link>
          </div>
          <div className="footerMenu">
            <h3>Follow Us</h3>
            <div className="social">
              <Link to="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#">
                <i className="fab fa-instagram" />
              </Link>
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
