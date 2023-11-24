import React from "react";
import { BrowserRouter } from "react-router-dom";
export default function AdminLogin() {
    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 offset-5 m-t-30">   
                          
                  <div className="loginbox ">
                    <div className="login-left">
                        <img className="img-fluid" src="img/logo-white.png" alt="Logo" />
                    </div>
                    <div className="login-right">
                        <div className="login-right-wrap">
                            <h1>Login</h1>
                            <p className="account-subtitle">Access to our dashboard</p>
                            {/* Form */}
                            <form action="https://dreamguys.co.in/demo/doccure/admin/index.html">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block" type="submit">Login</button>
                                </div>
                            </form>
                            {/* /Form */}
                            <div className="text-center forgotpass"><a href="/forget-password">Forgot Password?</a></div>
                            <div className="login-or">
                                <span className="or-line" />
                                <span className="span-or">or</span>
                            </div>
                            {/* Social Login */}
                            <div className="social-login">
                                <span>Login with</span>
                                <a href="#" className="facebook"><i className="fa fa-facebook" /></a><a href="#" className="google"><i className="fa fa-google" /></a>
                            </div>
                            {/* /Social Login */}
                            <div className="text-center dont-have">Don’t have an account? <a href="/register">Register</a></div>
                        </div>
                    </div>
                </div>
                
                </div>

                </div>
            </div>
        </div>

    )
}