import React from "react";

import "../assets/css/slideshow.css";

import slide2 from "../assets/images/slides/slide2.jpg";
import slide3 from "../assets/images/slides/slide3.jpg";
import lenovoYoga from "../assets/images/products/lenovoYoga.jpg";

class Home extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "../assets/js/slider.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    const imgSlide = { width: "100%" };
    const imgArticle = { width: 300, height: 300 };
    return (
      <section className="container">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 2</div>
            <img src={slide2} style={imgSlide} alt="slide" />
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 2</div>
            <img src={slide3} style={imgSlide} alt="slide" />
          </div>
        </div>
        <br />
        <div>
          <span className="dot" />
          <span className="dot" />
        </div>

        <section id="articles">
          <div className="line" />

          <article id="article1">
            <h2>The Best Lenovo Business Laptops 2019</h2>

            <div className="line" />

            <div className="articleBody clear">
              <figure>
                <a href="laptops/laptops-details.html">
                  <img src={lenovoYoga} alt="laptops" style={imgArticle} />
                </a>
              </figure>
              <p>
                We know that your small business feels anything but small to
                you, so our business laptops give you the tools you need to keep
                things humming, at prices that won't keep you up at night. We
                also know that no two businesses are alike. That’s why we’ve
                spent more than 25 years building a laptop selection for all
                types of applications, end-users, and budgets. Find the model
                that works seamlessly for your growing business.
              </p>
              <p>
                <b>Choosing the right laptop for work</b>
              </p>
              <p>
                A top-tier professional laptop must have robust security, strong
                build quality, and a comfortable keyboard that delivers a smooth
                typing experience. It also needs to be compact enough to carry
                on business trips. Our family of ThinkPad laptops is legendary
                in the industry. Known for being "the world's #1 laptops for
                business," ThinkPad laptops and workstations present an
                unmatched level of quality and reliability. For instance, the
                impressive battery life comes in handy when working on the road.
                The ThinkPad T Series (with dual battery) can last up to 30.3
                hours on a single charge, which is unimaginable for most
                computer brands. Durable, ultralight, and blazing fast, ThinkPad
                is the ideal laptop for work.
              </p>
              <p className="pbold">Click on the image for more information</p>
            </div>
          </article>
          <div className="line" />
        </section>
      </section>
    );
  }
}
export default Home;
