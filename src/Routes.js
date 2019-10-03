import React from "react";
import { Switch, Route } from "react-router-dom";
import AppliedRoute from "./AppliedRoute";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Lost from "./Components/Lost";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <Route
      exact
      path="/products/:id"
      render={props => {
        let cardPosition = props.location.pathname.replace("/products/", "");
        const product = this.state.products.find(element => {
          return (element.id = cardPosition);
        });
        return <ProductDetails product={product} />;
      }}
    />
    <Route
      path="/products"
      render={props => <Products products={this.state.products} />}
    />
    <Route component={Lost} />
  </Switch>
);
