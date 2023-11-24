import React from "react";
import DoctorHeader from "./doctorheader";
import DoctorMenu from "./doctormenu";
import DoctorFooter from "./doctorfooter";
export default function SocialMedia() {
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
                            <h2 className="breadcrumb-title">Social media</h2>
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
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="card">
                                <div className="card-body">
                                    {/* Social Form */}
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-8">
                                                <div className="form-group">
                                                    <label>Facebook URL</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-8">
                                                <div className="form-group">
                                                    <label>Twitter URL</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-8">
                                                <div className="form-group">
                                                    <label>Instagram URL</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-8">
                                                <div className="form-group">
                                                    <label>Pinterest URL</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-8">
                                                <div className="form-group">
                                                    <label>Linkedin URL</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-8">
                                                <div className="form-group">
                                                    <label>Youtube URL</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-section">
                                            <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                                        </div>
                                    </form>
                                    {/* /Social Form */}
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