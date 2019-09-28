import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Lost from "./Components/Lost"
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import ProductWrapper from "./Components/Products/ProductWrapper";
import Footer from "./Components/Footer";
import "./assets/css/Main.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  // componentDidMount() {
  //   const url = "./lib/products-shopify.json";
  //   fetch(url)
  //     .then(function(response) {
  //       if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({ products: data });
  //     });
  // }

    componentWillMount() {
    const url = "../lib/products-shopify.json";
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
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <Router>
        <div>
          <Nav />
          {user ? (
            <Switch>
              <Route path="/account" component={Login} />
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/products/:id"
                render={(props) => {
                  let cardPosition = props.location.pathname.replace('/products/','');
                  const product = this.state.products.find((element) =>{
                                    return element.id = cardPosition;
                                  })
                  return(
                    <ProductDetails
                        product={product}
                    />
                  )
                }
              }
              />
              <Route
                path="/products"
                render={props => <Products products={this.state.products} />}
              />
              
              <Route component={Lost} />
            </Switch>
          ) : (
            <Switch>
                <Route path="/account" component={Login} />
            </Switch>
          )}
          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
