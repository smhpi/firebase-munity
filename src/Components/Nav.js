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
                  <Link to="laptops/yoga.html">Yoga </Link>
                </li>
                <li className="dropright">
                  <Link className="subdropbtn" to="#">
                    IdeaPad
                    <i className="fas fa-caret-right" />
                  </Link>
                  <ul className="dropright-content">
                    <li>
                      <Link to="/products">15.6"</Link>
                    </li>
                    <li>
                      <Link to="laptops/idealpad.html#14">14"</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="desktops/thinkcentre.html">Desktops</Link>
            </li>
            <li>
              <Link to="pages/under-construction.html">Monitors</Link>
            </li>
            <li>
              <Link
                to="https://www.lenovo.com/ca/en/laptops/c/LAPTOPS"
                target="_blank"
              >
                Lenovo.com
              </Link>
            </li>
            <li>
                <Link to="/account">Account</Link>
            </li>
          </ul>

        </div>
      </header>
    );
  }
}
export default Nav;
