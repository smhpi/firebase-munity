import React from 'react';
import logo from '../assets/images/banner.jpg'

const Login = () => {
    return ( 
        <div className="container">
            <div className="row justify-content-md-center">
                <h3 >Login or <a href="#">Sign up</a></h3>
            </div>
            <div className="row justify-content-md-center">
                <div class="col-sm-2">
                    <a href="#" class="btn btn-lg btn-block omb_btn-facebook">
                        <i class="fa fa-facebook visible-xs"></i>
                        <span class="hidden-xs">Facebook</span>
                    </a>
                </div>
                <div className="col-sm-2">
                    <a href="#" className="btn btn-lg btn-block omb_btn-google">
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
                                    <form>
                                        <div className="form-group row">
                                            <label for="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address" required autofocus/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" className="form-control" name="password" required/>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-6 offset-md-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember"/> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>
                                            <a href="#" className="btn btn-link">
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
     );
}
 
export default Login;