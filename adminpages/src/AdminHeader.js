import React from "react";
import AdminNotification from "./Adminnotification";
export default function AdminHeader() {
    return (
        <div className="header">
            {/* Logo */}
            <div className="header-left">
                <a href="/" className="logo">
                    <img src="img/logo.png" alt="Logo" />
                </a>
                <a href="/" className="logo logo-small">
                    <img src="img/logo-small.png" alt="Logo" width={30} height={30} />
                </a>
            </div>
            {/* /Logo */}
            <a href="javascript:void(0);" id="toggle_btn">
                <i className="fe fe-text-align-left" />
            </a>
            <div className="top-nav-search">
                <form>
                    <input type="text" className="form-control" placeholder="Search here" />
                    <button className="btn" type="submit"><i className="fa fa-search" /></button>
                </form>
            </div>
            {/* Mobile Menu Toggle */}
            <a className="mobile_btn" id="mobile_btn">
                <i className="fa fa-bars" />
            </a>
            {/* /Mobile Menu Toggle */}
            {/* Header Right Menu */}
            <ul className="nav user-menu">
                {/* User Menu */}
                <li className="nav-item">
                    <a href="/profile" className="dropdown-toggle nav-link" data-toggle="dropdown">
                        <span className="user-img"><img className="rounded-circle" src="img/profiles/avatar-01.jpg" width={31} alt="Ryan Taylor" /></span>
                    </a>
                </li>
              {/* /User Menu */}
            </ul>
            {/* /Header Right Menu */}
        </div>


    )
}