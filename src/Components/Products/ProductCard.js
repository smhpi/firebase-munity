import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/images.css";

class ProductCard extends Component {
  render() {
    let { product } = this.props;

    return (
      <div key={product.id} className="thimble">
        <img src={product.images[0].src} alt="Avatar" className="image" />
        <div className="middle">
          <div className="text">
            <Link to={`products/${product.id}`}>View</Link>
          </div>
          <h4>{product.title}</h4>
        </div>
      </div>
    );
  }
}
export default ProductCard;
