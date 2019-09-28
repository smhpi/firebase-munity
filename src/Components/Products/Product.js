import React, { Component } from "react";

class Product extends Component {
  render() {
    let { product } = this.props;
    const imgStyle = { padding: 5, width: "100%" };
    const imgThubnail = { width: 150 };
    const breakDiv = { display: "block", position: "relative", clear: "both" };
    return (
      <article className="collection">
        <h2>Lenovo Laptops</h2>
        <h3>{product.title}</h3>
        <div className="line" />
        <div className="gallery">
          <div className="photos">
            <figure className="xzoom-lens">
              <img
                className="xzoom5"
                id="xzoom-magnific"
                src={product.images[0].src}
                style={imgStyle}
                alt="lenovo-yoga"
              />
              <figcaption>{product.title}</figcaption>
            </figure>
            <div className="collection">
              <img
                src={product.images[1].src}
                alt="lenovo-yoga"
                style={imgThubnail}
              />
              <img
                src={product.images[2].src}
                alt="lenovo-yoga"
                style={imgThubnail}
              />
            </div>
          </div>
        </div>
        <form>
          <fieldset className="pbold">
            <label>Title</label>
            <br />
            <input name="title" type="text" defaultValue={product.title} />
            <br />
            <label>Quantity</label>
            <br />
            <input
              name="title"
              type="text"
              defaultValue={product.variants[0].inventory_quantity}
            />
            <br />
            <label>SKU</label>
            <br />
            <input
              name="title"
              type="text"
              defaultValue={product.variants[0].sku}
            />
            <br />
            <label>Price</label>
            <br />
            <input
              name="title"
              type="text"
              defaultValue={product.variants[0].price}
            />
          </fieldset>
        </form>

        <div style={breakDiv}></div>
      </article>
    );
  }
}
export default Product;
