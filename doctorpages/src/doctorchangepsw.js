import React from "react";
import DoctorMenu from "./doctormenu";
import DoctorHeader from "./doctorheader";
import DoctorFooter from "./doctorfooter";
export default function DoctorChangepsw() {
    return (
        <div className="main-wrapper">
            <DoctorHeader />
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Dashboard</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-3 col-xl-2 bg-info m-b-10 m-t-50">
                        <DoctorMenu />
                    </div>
                    <div className="col-md-8 col-lg-9 col-xl-10">
                    <div className="col-md-7 col-lg-8 col-xl-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        {/* Change Password Form */}
                                        <form action="/">
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
                                        {/* /Change Password Form */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
        
                </div>
            </div>
            </div>
            
    
            {/* Footer */}
            <div className="row">
                <DoctorFooter />
            </div>
            {/* /Footer */}
        </div>
       

    )
}