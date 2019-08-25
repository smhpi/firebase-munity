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
          <h2>Products</h2>
        </div>
        {products.map(item => (
          <Thubnail product={item} key={item.id} />
        ))}
      </article>
    );
  }
}
export default Products;
