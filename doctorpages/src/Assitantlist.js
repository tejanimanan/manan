import DoctorMenu from "./doctormenu";
import DoctorHeader from "./doctorheader";
import React from "react";
export default function DoctorAssitant() {
    return (
        <div className="container-fiuld">
            <div className="row">
                <div className="col-12">
                    <DoctorHeader />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <DoctorMenu />
                </div>
                <div className="col-md-10">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-10 m-t-50">
                                <h3 className="page-title m-t-30">List of Assitant</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Assitant</li>
                                </ul>
                            </div>
                            <div className="col-2">

                                <a href="#Add_Specialities_details" data-toggle="modal" className="btn btn-primary float-left mt-2">Add</a>

                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="datatable table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Assitant Name</th>
                                                    <th>Speciality</th>
                                                    <th>Member Since</th>
                                                    <th>Earned</th>
                                                    <th>Account Status</th>
                                                    <th>Actions</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="img/doctors/doctor-thumb-01.jpg" alt="User Image" /></a>
                                                            <a href="profile.html">Dr. Ruby Perrin</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>14 Jan 2019 <br /><small>02.59 AM</small></td>
                                                    <td>$3100.00</td>
                                                    <td>
                                                        <div className="status-toggle">
                                                            <input type="checkbox" id="status_1" className="check" defaultChecked />
                                                            <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light float-left" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light float-left ">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="img/doctors/doctor-thumb-02.jpg" alt="User Image" /></a>
                                                            <a href="profile.html">Dr. Darren Elder</a>
                                                        </h2>
                                                    </td>
                                                    <td>Dental</td>
                                                    <td>11 Jun 2019 <br /><small>4.50 AM</small></td>
                                                    <td>$5000.00</td>
                                                    <td>
                                                        <div className="status-toggle">
                                                            <input type="checkbox" id="status_1" className="check" defaultChecked />
                                                            <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light float-left" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light float-left ">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="img/doctors/doctor-thumb-03.jpg" alt="User Image" /></a>
                                                            <a href="profile.html">Dr. Deborah Angel</a>
                                                        </h2>
                                                    </td>
                                                    <td>Cardiology</td>
                                                    <td>4 Jan 2018 <br /><small>9.40 AM</small></td>
                                                    <td>$3300.00</td>
                                                    <td>
                                                        <div className="status-toggle">
                                                            <input type="checkbox" id="status_1" className="check" defaultChecked />
                                                            <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light float-left" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light float-left ">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="img/doctors/doctor-thumb-04.jpg" alt="User Image" /></a>
                                                            <a href="profile.html">Dr. Sofia Brient</a>
                                                        </h2>
                                                    </td>
                                                    <td>Urology</td>
                                                    <td>5 Jul 2019 <br /><small>12.59 AM</small></td>
                                                    <td>$3500.00</td>
                                                    <td>
                                                        <div className="status-toggle">
                                                            <input type="checkbox" id="status_1" className="check" defaultChecked />
                                                            <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light float-left" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light float-left ">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="img/doctors/doctor-thumb-05.jpg" alt="User Image" /></a>
                                                            <a href="profile.html">Dr. Marvin Campbell</a>
                                                        </h2>
                                                    </td>
                                                    <td>Orthopaedics</td>
                                                    <td>24 Jan 2019 <br /><small>02.59 AM</small></td>
                                                    <td>$3700.00</td>
                                                    <td>
                                                        <div className="status-toggle">
                                                            <input type="checkbox" id="status_1" className="check" defaultChecked />
                                                            <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light float-left" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light float-left ">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="img/doctors/doctor-thumb-06.jpg" alt="User Image" /></a>
                                                            <a href="profile.html">Dr. Katharine Berthold</a>
                                                        </h2>
                                                    </td>
                                                    <td>Orthopaedics</td>
                                                    <td>23 Mar 2019 <br /><small>02.50 PM</small></td>
                                                    <td>$4000.00</td>
                                                    <td>
                                                        <div className="status-toggle">
                                                            <input type="checkbox" id="status_1" className="check" defaultChecked />
                                                            <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light float-left" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light float-left ">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}