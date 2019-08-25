import React, { Component } from "react";

import "../assets/css/images.css";

class Thubnail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { product } = this.props;

    return (
      <div key={product.id} className="thimble">
        <img src={product.photo} alt="Avatar" className="image" />
        <div className="middle">
          <div className="text">
            <a>View</a>
          </div>
          <h4>{product.title}</h4>
        </div>
      </div>
    );
  }
}
export default Thubnail;
