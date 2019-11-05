import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import AppliedRoute from "./AppliedRoute";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Lost from "./Components/Lost";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

//import Routes from "./Routes";
import Footer from "./Components/Footer";
import "./assets/css/Main.css";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  userHasAuthenticated = res => {
    this.setState({ isAuthenticated: res });
  };

  componentDidMount() {
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

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(this.userHasAuthenticated(true))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
    this.setState({ isAuthenticating: false });
  }

  handleLogout = async e => {
    await firebase.auth().signOut();
    this.userHasAuthenticated(false);
    console.log(this.props);
  };

  render() {
    let right = { float: "right" };

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <Router>
        <div>
          <header>
            <hgroup>
              <h1>Lenovo Certified Partner</h1>
              <h3>New ThinkPads Comming!</h3>
            </hgroup>
            <div className="clear">
              <nav id="mobile_menu" />
              <ul id="nav_menu" className="nav_bar">
                <li>
                  <Link to="/">
                    <i className="fa fa-home" />
                    Home
                  </Link>
                </li>
                <li className="dropdown">
                  <Link className="dropbtn" to="#">
                    Laptops
                    <i className="fas fa-caret-down" />
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/products">ThinkPad </Link>
                    </li>
                    <li>
                      <Link to="laptops/yoga.html">Yoga </Link>
                    </li>
                    <li className="dropright">
                      <Link className="subdropbtn" to="#">
                        IdeaPad
                        <i className="fas fa-caret-right" />
                      </Link>
                      <ul className="dropright-content">
                        <li>
                          <Link to="/products">15.6"</Link>
                        </li>
                        <li>
                          <Link to="laptops/idealpad.html#14">14"</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="desktops/thinkcentre.html">Desktops</Link>
                </li>
                <li>
                  <Link to="pages/under-construction.html">Monitors</Link>
                </li>
                <li>
                  <Link
                    to="https://www.lenovo.com/ca/en/laptops/c/LAPTOPS"
                    target="_blank"
                  >
                    Lenovo.com
                  </Link>
                </li>

                <span style={right}>
                  {user ? (
                    <Fragment>
                      <li>
                        <Link to="/account">Account /</Link>
                      </li>
                      <Link onClick={signOut}>LogOut</Link>
                    </Fragment>
                  ) : (
                    <Link onClick={signInWithGoogle}>SignIn by Google</Link>
                  )}
                </span>
              </ul>
            </div>
          </header>
          {this.state.isAuthenticated ? (
            <Switch>
              <Route
                path="/account"
                render={props => <Login props={childProps} />}
              />
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/products/:id"
                render={props => {
                  let cardPosition = props.location.pathname.replace(
                    "/products/",
                    ""
                  );
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
          ) : (
            <Switch>
              <AppliedRoute exact path="/" component={Home} />
              <AppliedRoute
                path="/login"
                component={Login}
                props={childProps}
              />
            </Switch>
          )}
          <Footer />
        </div>
      </Router>
    );
  }
}

//export default App;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
