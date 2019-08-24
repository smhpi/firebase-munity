import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <article className="collection">
        <div id="15">
          <h2>IdealPad 15.6"</h2>
        </div>
        <div className="thimble">
          <img
            src="../images/collection/laptops/lenovo-thinkpad-t450s-core-i7-250x.jpg"
            alt="Avatar"
            className="image"
            style="width:100%"
          />
          <div className="middle">
            <div className="text">
              <a href="laptops-details.html">View</a>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
export default Products;
