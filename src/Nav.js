import React from "react";

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
              <a href="default.html">
                <i className="fa fa-home" />
                Home
              </a>
            </li>
            <li className="dropdown">
              <a className="dropbtn" href="#">
                Laptops
                <i className="fas fa-caret-down" />
              </a>
              <ul className="dropdown-content">
                <li>
                  <a href="laptops/thinkpad.html">ThinkPad </a>
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
                      <a href="laptops/idealpad.html#15">15.6"</a>
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
