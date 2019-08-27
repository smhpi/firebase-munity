import React, { Component } from "react";
import Product from "./Product";

class ProductWrapper extends Component {
  render() {
    const product = this.props.products.find(p => {
      return p.id == this.props.match.params.id;
    });
    console.log(this.props.products);
    console.log(this.props.match.params.id);
    console.log(product);
    return product ? (
      <Product product={product} />
    ) : (
      <div className="text-center">
        <h1>The product couldn't be found.</h1>
      </div>
    );
  }
}
export default ProductWrapper;
