import React from "react";
export default function DoctorMenu() {
    return (
        <div className="profile-sidebar theiaStickySidebar">
            <div className="widget-profile pro-widget-content">
                <div className="profile-info-widget">
                    <a href="/profile" className="booking-doc-img">
                        <img src="img/doctors/doctor-thumb-02.jpg" alt="User Image" />
                    </a>
                    <div className="profile-det-info">
                        <h3>Dr. Darren Elder</h3>
                        <div className="patient-details">
                            <h5 className="mb-0">BDS, MDS - Oral &amp; Maxillofacial Surgery</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-widget">
                <nav className="dashboard-menu">
                    <ul>
                        <li className="active">
                            <a href="/">
                                <i className="fas fa-columns" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/appoinment">
                                <i className="fas fa-calendar-check" />
                                <span>My Appointments</span>
                            </a>
                        </li>
                        <li>
                            <a href="/my-assitant">
                                <i className="fas fa-user-injured" />
                                <span>My Assitant</span>
                            </a>
                        </li>
                        <li>
                            <a href="/services">
                                <i className="fas fa-hourglass-start" />
                                <span>My Servies</span>
                            </a>
                        </li>
                        <li>
                            <a href="/invoices">
                                <i className="fas fa-file-invoice" />
                                <span>Invoices</span>
                            </a>
                        </li>
                        <li>
                            <a href="/reviews">
                                <i className="fas fa-star" />
                                <span>Reviews</span>
                            </a>
                        </li>
                        <li>
                            <a href="/chat-doctor">
                                <i className="fas fa-comments" />
                                <span>Message</span>
                                <small className="unread-msg">23</small>
                            </a>
                        </li>
                        <li>
                            <a href="/profile-setting">
                                <i className="fas fa-user-cog" />
                                <span>Profile Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="/social-media">
                                <i className="fas fa-share-alt" />
                                <span>Social Media</span>
                            </a>
                        </li>
                        <li>
                            <a href="/change-password">
                                <i className="fas fa-lock" />
                                <span>Change Password</span>
                            </a>
                        </li>
                        <li>
                            <a href="/lockscreen">
                                <i className="fas fa-sign-out-alt" />
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
                  
                )
}