import React from "react";
import Header from "./menu";
export default function Forgetpsw() {
    return (
        <div>
             <Header />
             <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            {/* / menubar */}
                            <h2 className="breadcrumb-title">Forget Password</h2>
                           </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        {/* Account Content */}
                        <div className="account-content">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <img src="img/login-banner.png" className="img-fluid" alt="Login Banner" />
                                </div>
                                <div className="col-md-12 col-lg-6 login-right">
                                    <div className="login-header">
                                        <h3>Forgot Password?</h3>
                                        <p className="small text-muted">Enter your email to get a password reset link</p>
                                    </div>
                                    {/* Forgot Password Form */}
                                    <form action="/">
                                        <div className="form-group form-focus">
                                            <input type="email" className="form-control floating" />
                                            <label className="focus-label">Email</label>
                                        </div>
                                        <div className="text-right">
                                            <a className="forgot-link" href="/login">Remember your password?</a>
                                        </div>
                                        <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button>
                                    </form>
                                    {/* /Forgot Password Form */}
                                </div>
                            </div>
                        </div>
                        {/* /Account Content */}
                    </div>
                </div>
            </div>
        </div>

    )
}