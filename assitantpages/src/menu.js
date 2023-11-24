import React from "react";
export default function Header() {
    return (

        <header className="header">
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                    <a id="mobile_btn" href="javascript:void(0);">
                        <span className="bar-icon">
                            <span />
                            <span />
                            <span />
                        </span>
                    </a>
                    <a href="/" className="navbar-brand logo">
                        <img src="img/logo.png" className="img-fluid" alt="Logo" />
                    </a>
                </div>
                <div className="main-menu-wrapper">
                    <div className="menu-header">
                        <a href="/" className="menu-logo">
                            <img src="img/logo.png" className="img-fluid" alt="Logo" />
                        </a>
                        <a id="menu_close" className="menu-close" href="javascript:void(0);">
                            <i className="fas fa-times" />
                        </a>
                    </div>
                    <ul className="main-nav">
                        <li className="">
                            <a href="/">Home</a>
                        </li>
                        <li className="">
                            <a href="change-password">Change Password</a>
                        </li>
                        <li className="">
                            <a href="forget-password">Forget Password</a>
                        </li>
                        <li className="">
                            <a href="login">Login</a>
                        </li>
                       

                       </ul>
                </div>
                <ul className="nav header-navbar-rht">
                    <li className="nav-item contact-item">
                        <div className="header-contact-img">
                            <i className="far fa-hospital" />
                        </div>
                        <div className="header-contact-detail">
                            <p className="contact-header">Contact</p>
                            <p className="contact-info-header"> +1 315 369 5943</p>
                        </div>
                    </li>
                    {/* User Menu */}
                    <li className="nav-item dropdown has-arrow logged-item">
                        <a href="/profile" className=" nav-link" data-toggle="dropdown">
                            <span className="user-img">
                                <img className="rounded-circle" src="img/doctors/doctor-thumb-02.jpg" width={31} alt="Darren Elder" />
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="user-header">
                                <div className="avatar avatar-sm">
                                    <img src="img/doctors/doctor-thumb-02.jpg" alt="User Image" className="avatar-img rounded-circle" />
                                </div>
                                <div className="user-text">
                                    <h6>Darren Elder</h6>
                                    <p className="text-muted mb-0">Doctor</p>
                                </div>
                            </div>
                            <a className="dropdown-item" href="doctor-dashboard.html">Dashboard</a>
                            <a className="dropdown-item" href="doctor-profile-settings.html">Profile Settings</a>
                            <a className="dropdown-item" href="login.html">Logout</a>
                        </div>
                    </li>
                    {/* /User Menu */}
                </ul>
            </nav>
        </header>


    )
}