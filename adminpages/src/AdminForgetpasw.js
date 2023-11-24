import React from "react";
export default function AdminForgetpsw() {
    return (
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            <img className="img-fluid" src="img/logo-white.png" alt="Logo" />
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