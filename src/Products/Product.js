import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { product } = this.props;
    return (
      <article className="collection">
        <h2>Lenovo Laptops</h2>
        <h3>{product.title}</h3>
        <div className="line" />
        <div className="gallery">
          <div className="photos">
            <figure>
              <img src={product.photo} alt="lenovo-yoga" />
              <figcaption>Lenovo Yoga 2 in 1 - 2019</figcaption>
            </figure>
          </div>
        </div>
        <div className="articleBody clear">
          <p>{product.detais}</p>
          <p className="pbold" />
        </div>
      </article>
    );
  }
}
export default Product;
