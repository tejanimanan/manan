import React from "react";
import UserHeader from "./userheader";
import ProfileMenu from "./profilemenubar";
import Footer from "./footer";
export default function Changepsw() {
    return (
        <div className="main-wrapper">
            <UserHeader />
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/profile">Dashboard</a></li>
                                </ol>
                               </nav>
                            <h2 className="breadcrumb-title">Change Password</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7">
                        <div className="card">
                            <div className="card-body">
                            <form action="/profile">
                                            <div className="form-group">
                                                <label> <i class="fa-solid fa-lock"></i> Old Password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label><i class="fa-solid fa-key"></i> New Password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label><i class="fa-solid fa-key"></i> Confirm Password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                            <div className="submit-section">
                                                <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                            </div>
                                        </form>
                                      
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
            
    
            {/* Footer */ }
    <div className="row">
        <Footer />
    </div>
    {/* /Footer */ }
        </div >
       

    )
}