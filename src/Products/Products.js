import React, { Component } from "react";
import Thubnail from "./Thubnail";

class Products extends Component {
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
