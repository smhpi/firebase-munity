import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Products from "./Products/Products";
import Footer from "./Footer";
import "./assets/css/Main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    const url = "./lib/products.json";
    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ products: data });
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route
            path="/products"
            render={props => <Products products={this.state.products} />}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
