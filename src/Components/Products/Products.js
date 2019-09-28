import React, { Component } from "react";
import ProductCard from "./ProductCard";

class Products extends Component {
  render() {
    const products = this.props.products;
    console.log(products);
    return (
      <article className="collection">
        <div>
          <h2>Products</h2>
        </div>
        {products.map(item => (
          <ProductCard product={item} key={item.id} />
        ))}
      </article>
    );
  }
}
export default Products;
