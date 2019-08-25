import React, { Component } from "react";
import Thubnail from "./Thubnail";

import lenovoYoga from "../assets/images/products/lenovoYoga.jpg";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const products = this.props.products;
    return (
      <article className="collection">
        <div>
          <h2>IdealPad 15.6"</h2>
        </div>
        {products.map(item => (
          <Thubnail product={item} />
        ))}
      </article>
    );
  }
}
export default Products;
