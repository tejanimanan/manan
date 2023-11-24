import React from "react";
import DoctorHeader from "./doctorheader";
import DoctorMenu from "./doctormenu";
import DoctorFooter from "./doctorfooter";
export default function Appoinment() {
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
                            <h2 className="breadcrumb-title">Appoinment</h2>
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
                            <div className="">
                                <div className="appointments">
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Richard Wilson</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 14 Nov 2019, 10.00 AM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> richard@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 923 782 4575</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient1.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Charlene Reed </a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 12 Nov 2019, 5.00 PM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> North Carolina, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> charlenereed@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 828 632 9170</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient2.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Travis Trimble</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 11 Nov 2019, 8.00 PM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> Maine, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> travistrimble@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 207 729 9974</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient3.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Carl Kelly</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 9 Nov 2019, 9.00 AM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> Newyork, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> carlkelly@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 260 724 7769</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient4.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Michelle Fairfax</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 9 Nov 2019, 1.00 PM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> Indiana, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> michellefairfax@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 504 368 6874</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient5.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Gina Moore</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 8 Nov 2019, 3.00 PM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> Florida, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> ginamoore@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 954 820 7887</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient6.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Elsie Gilley</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 6 Nov 2019, 9.00 AM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> Kentucky, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> elsiegilley@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 315 384 4562</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient7.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Joan Gardner</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 5 Nov 2019, 12.00 PM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> California, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> joangardner@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 707 2202 603</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient8.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Daniel Griffing</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 5 Nov 2019, 7.00 PM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> New Jersey, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> danielgriffing@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 973 773 9497</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient9.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Walter Roberson</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 4 Nov 2019, 10.00 AM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> Florida, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> walterroberson@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 850 358 4445</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient10.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Robert Rhodes</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 4 Nov 2019, 11.00 AM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> California, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> robertrhodes@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 858 259 5285</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
                                    {/* Appointment List */}
                                    <div className="appointment-list">
                                        <div className="profile-info-widget">
                                            <a href="patient-profile.html" className="booking-doc-img">
                                                <img src="img/patients/patient11.jpg" alt="User Image" />
                                            </a>
                                            <div className="profile-det-info">
                                                <h3><a href="patient-profile.html">Harry Williams</a></h3>
                                                <div className="patient-details">
                                                    <h5><i className="far fa-clock" /> 3 Nov 2019, 6.00 PM</h5>
                                                    <h5><i className="fas fa-map-marker-alt" /> Colorado, United States</h5>
                                                    <h5><i className="fas fa-envelope" /> harrywilliams@example.com</h5>
                                                    <h5 className="mb-0"><i className="fas fa-phone" /> +1 303 607 7075</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="appointment-action">
                                            <a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                                <i className="far fa-eye" /> View
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                <i className="fas fa-check" /> Accept
                                            </a>
                                            <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                <i className="fas fa-times" /> Cancel
                                            </a>
                                        </div>
                                    </div>
                                    {/* /Appointment List */}
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