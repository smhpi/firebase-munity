import React, { Component } from "react";
// import logo from '../assets/images/banner.jpg'
// import {
//   withRouter
// } from "react-router-dom";
// import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
//import firebaseConfig from "../firebaseConfig";

//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const firebaseAppAuth = firebase.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider()
// };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
      // isAuthenticated: false,
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    //await this.handleChange(event);
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.props.userHasAuthenticated(true))
      .then(this.props.history.push("/"))
      .catch(er => {
        let errorCode = er.code;
        let errorMessage = er.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong Password");
        } else {
          alert(errorMessage);
        }
      });
  };

  // initApp = () => {
  //     firebase.auth().onAuthStateChanged( (user)=>{
  //         if (user){
  //             this.setState({isAuthenticated : true,})
  //             console.log(user.displayName)
  //         }
  //     })}

  render() {
    return (
      <div className="container">
        <div>
          <div className="row justify-content-md-center">
            <h3>
              Login or <a href="/signup">Sign up</a>
            </h3>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-2">
              <a
                href="/loginfacebook"
                className="btn btn-lg btn-block omb_btn-facebook"
              >
                <i className="fa fa-facebook visible-xs"></i>
                <span className="hidden-xs">Facebook</span>
              </a>
            </div>
            <div className="col-sm-2">
              <a
                href="/googleLogin"
                className="btn btn-lg btn-block omb_btn-google"
              >
                <i className="fa fa-google-plus visible-xs"></i>
                <span className="hidden-xs">Google</span>
              </a>
            </div>
          </div>
          <main className="login-form">
            <div className="cotainer">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                          <label className="col-md-4 col-form-label text-md-right">
                            E-Mail Address
                          </label>
                          <div className="col-md-6">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              required
                              autoFocus
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-md-4 col-form-label text-md-right">
                            Password
                          </label>
                          <div className="col-md-6">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col-md-6 offset-md-4">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" name="remember" />{" "}
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 offset-md-4">
                          <input
                            className="btn btn-primary"
                            type="submit"
                            value="Login"
                            disabled={!this.validateForm()}
                          />

                          <a href="/forget" className="btn btn-link">
                            Forgot Your Password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Login;

// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth
// })(Login)
