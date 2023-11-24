import React from "react";
import DoctorHeader from "./doctorheader";
import DoctorMenu from "./doctormenu";
import DoctorPagecontent from "./doctorpage";
import DoctorFooter from "./doctorfooter";
export default function DoctorHome() {
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
                        <DoctorPagecontent/>
                    </div>
        
                </div>
            </div>
            </div>
            
    
            {/* Page Content */}
            
            {/* /Page Content */}
            {/* Footer */}
            <div className="row">
                <DoctorFooter />
            </div>
            {/* /Footer */}
        </div>


    )
}