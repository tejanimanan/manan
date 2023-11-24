import React from "react";
import AdminMenu from "./AdminMenu";
import AdminHeader from "./AdminHeader";
export default function AdminNotification() {
    return (
        <div>
            <ul>
                {/* Notifications */}
                <li className="nav-item dropdown noti-dropdown">
                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i className="fe fe-bell" /> <span className="badge badge-pill">3</span>
                    </a>
                    <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                            <span className="notification-title">Notifications</span>
                            <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
                        </div>
                        <div className="noti-content">
                            <ul className="notification-list">
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <span className="avatar avatar-sm">
                                                <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/doctors/doctor-thumb-01.jpg" />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
                                                <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <span className="avatar avatar-sm">
                                                <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient1.jpg" />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Charlene Reed</span> has booked her appointment to <span className="noti-title">Dr. Ruby Perrin</span></p>
                                                <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <span className="avatar avatar-sm">
                                                <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient2.jpg" />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Travis Trimble</span> sent a amount of $210 for his <span className="noti-title">appointment</span></p>
                                                <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="#">
                                        <div className="media">
                                            <span className="avatar avatar-sm">
                                                <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient3.jpg" />
                                            </span>
                                            <div className="media-body">
                                                <p className="noti-details"><span className="noti-title">Carl Kelly</span> send a message <span className="noti-title"> to his doctor</span></p>
                                                <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="topnav-dropdown-footer">
                            <a href="#">View all Notifications</a>
                        </div>
                    </div>
                </li>
                {/* /Notifications */}

            </ul>
        </div>
    )
}