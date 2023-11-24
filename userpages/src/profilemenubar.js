export default function ProfileMenu() {
    return (
        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <a href="#" className="booking-doc-img">
                            <img src="img/patients/patient.jpg" alt="User Image" />
                        </a>
                        <div className="profile-det-info">
                            <h3>Richard Wilson</h3>
                            <div className="patient-details">
                                <h5><i className="fas fa-birthday-cake" /> 24 Jul 1983, 38 years</h5>
                                <h5 className="mb-0"><i className="fas fa-map-marker-alt" /> Newyork, USA</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <ul>
                            <li className="active">
                                <a href="/profile">
                                    <i className="fas fa-columns" />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="fas fa-user-cog" />
                                    <span>Profile Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="change-password">
                                    <i className="fas fa-lock" />
                                    <span>Change Password</span>
                                </a>
                            </li>
                            <li>
                                <a href="/forget-password">
                                    <i className="fas fa-lock" />
                                    <span>Forget Password</span>
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
        </div>

    )
}