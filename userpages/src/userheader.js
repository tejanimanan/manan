export default function UserHeader()
{
    return(
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
                        <a href="index-2.html" className="navbar-brand logo">
                            <img src=" img/logo.png" className="img-fluid" alt="Logo" />
                        </a>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <a href="index-2.html" className="menu-logo">
                                <img src=" img/logo.png" className="img-fluid" alt="Logo" />
                            </a>
                            <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                <i className="fas fa-times" />
                            </a>
                        </div>
                        <ul className="main-nav">
                            <li className="active">
                                <a href="/">Home</a>
                            </li>
                            
                            <li className="">
                                <a href="/login">login</a>
                            </li>
                            <li className="">
                                <a href="/lockscreen">logout</a>
                            </li>
                            <li className="">
                                <a href="/register">Register</a>
                            </li>
                            <li className="">
                                <a href="/profile">My Profile</a>
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
                        <li className="nav-item">
                            <a className="nav-link header-login" href="/login">login / Signup </a>
                        </li>
                    </ul>
                </nav>
            </header>
            
    )
}