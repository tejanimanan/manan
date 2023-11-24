import React from "react";
export default function DoctorLogin() {
    return (

        < div className="content" >
            <div className="container-fluid">
                <div className="row m-t-50">
                    <div className="col-md-8 offset-md-2">
                        {/* Login Tab Content */}
                        <div className="account-content">
                            <h2>Doctor Login</h2>
                            <div className="row align-items-center justify-content-center m-t-50">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <img src="img/login-banner.png" className="img-fluid" alt="Doccure Login" />
                                </div>
                                <div className="col-md-12 col-lg-6 login-right">
                                    <div className="login-header">
                                        <h3>Login <span>Doccure</span></h3>
                                    </div>
                                    <form action="/">
                                        <div className="form-group form-focus">
                                            <input type="email" className="form-control floating" />
                                            <label className="focus-label">Email</label>
                                        </div>
                                        <div className="form-group form-focus">
                                            <input type="password" className="form-control floating" />
                                            <label className="focus-label">Password</label>
                                        </div>
                                        <div className="text-right">
                                            <a className="forgot-link" href="forgot-password.html">Forgot Password ?</a>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
                                        <div className="login-or">
                                            <span className="or-line" />
                                            <span className="span-or">or</span>
                                        </div>
                                        <div className="row form-row social-login">
                                            <div className="col-6">
                                                <a href="#" className="btn btn-facebook btn-block"><i class="fa-brands fa-square-facebook"></i> Login</a>
                                            </div>
                                            <div className="col-6">
                                                <a href="#" className="btn btn-google btn-block"><i className="fab fa-google" /> Login</a>
                                            </div>
                                        </div>
                                        <div className="text-center dont-have">Don’t have an account? <a href="register.html">Register</a></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}