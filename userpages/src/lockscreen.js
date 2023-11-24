import React from "react";
export default function LockScreen() {
    return (
        <div className="main-wrapper login-body">
            <div className="login-wrapper">
                <div className="container">
                    <div className="loginbox">
                        <div className="login-left">
                            <img className="img-fluid" src="img/logo.png" alt="Logo" />
                        </div>
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <div className="lock-user">
                                    <img className="rounded-circle" src="img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                                    <h4>John Doe</h4>
                                </div>
                                {/* Form */}
                                <form action="/profile">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Password" />
                                    </div>
                                    <div className="form-group mb-0">
                                        <button className="btn btn-primary btn-block" type="submit">Enter</button>
                                    </div>
                                </form>
                                {/* /Form */}
                                <div className="text-center dont-have">Sign in as a different user? <a href="/login">Login</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}