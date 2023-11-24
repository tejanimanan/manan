import React from "react";
export default function UserForgetpsw() {
    return (
        <div className="main-wrapper login-body  m-t-50">
            <div className="login-wrapper">
                <div className="container m-t-50">
                    <div className="loginbox  shadow">
                        <div className="login-left">
                                 <img src=" img/logo.png" className="img-fluid" alt="Logo" />
                        </div>
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <h1>Forgot Password?</h1>
                                <p className="account-subtitle">Enter your email to get a password reset link</p>
                                {/* Form */}
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Email" />
                                    </div>
                                    <div className="form-group mb-0">
                                        <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                                    </div>
                                </form>
                                {/* /Form */}
                                <div className="text-center dont-have">Remember your password? <a href="/login">Login</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}