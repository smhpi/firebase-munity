import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <header>
        <hgroup>
          <h1>Lenovo Certified Partner</h1>
          <h3>New ThinkPads Comming!</h3>
        </hgroup>
        <div className="clear">
          <nav id="mobile_menu" />
          <ul id="nav_menu" className="navbar">
            <li>
              <Link to="/">
                <i className="fa fa-home" />
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link className="dropbtn" to="#">
                Laptops
                <i className="fas fa-caret-down" />
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/products">ThinkPad </Link>
                </li>
                <li>
                  <a href="laptops/yoga.html">Yoga </a>
                </li>
                <li className="dropright">
                  <a className="subdropbtn" href="#">
                    IdeaPad
                    <i className="fas fa-caret-right" />
                  </a>
                  <ul className="dropright-content">
                    <li>
                      <Link to="/products">15.6"</Link>
                    </li>
                    <li>
                      <a href="laptops/idealpad.html#14">14"</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="desktops/thinkcentre.html">Desktops</a>
            </li>
            <li>
              <a href="pages/under-construction.html">Monitors</a>
            </li>
            <li>
              <a
                href="https://www.lenovo.com/ca/en/laptops/c/LAPTOPS"
                target="_blank"
              >
                Lenovo.com
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Nav;
