import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import React from "react";
export default function AdminService() {
    return (
        <div className="container">
            <div className="row">
                <AdminHeader />
            </div>
            <div className="row">
                <div className="col-md-2">
                    <AdminMenu />
                </div>
                <div className="col-md-10">
                    {/* Page Wrapper */}
                    <div className="page-wrapper">
                        <div className="content container-fluid">
                            {/* Page Header */}
                            <div className="page-header">
                                <div className="row">
                                    <div className="col-10">
                                        <h3 className="page-title">Specialities</h3>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                            <li className="breadcrumb-item active">Specialities</li>
                                        </ul>
                                    </div>
                                    <div className="col-2">
                                        <a href="#Add_Specialities_details" data-toggle="modal" className="btn btn-primary float-right mt-2">Add</a>
                                    </div>
                                </div>
                            </div>
                            {/* /Page Header */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="datatable table table-hover table-center mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Specialities</th>
                                                            <th className="text-right">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>#SP001</td>
                                                            <td>
                                                                <h2 className="table-avatar">
                                                                    <a href="profile.html" className="avatar avatar-sm mr-2">
                                                                        <img className="avatar-img" src="img/specialities/specialities-01.png" alt="Speciality" />
                                                                    </a>
                                                                    <a href="profile.html">Urology</a>
                                                                </h2>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#SP002</td>
                                                            <td>
                                                                <h2 className="table-avatar">
                                                                    <a href="profile.html" className="avatar avatar-sm mr-2">
                                                                        <img className="avatar-img" src="img/specialities/specialities-02.png" alt="Speciality" />
                                                                    </a>
                                                                    <a href="profile.html">Neurology</a>
                                                                </h2>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#SP003</td>
                                                            <td>
                                                                <h2 className="table-avatar">
                                                                    <a href="profile.html" className="avatar avatar-sm mr-2">
                                                                        <img className="avatar-img" src="img/specialities/specialities-03.png" alt="Speciality" />
                                                                    </a>
                                                                    <a href="profile.html">Orthopedic</a>
                                                                </h2>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#SP004</td>
                                                            <td>
                                                                <h2 className="table-avatar">
                                                                    <a href="profile.html" className="avatar avatar-sm mr-2">
                                                                        <img className="avatar-img" src="img/specialities/specialities-04.png" alt="Speciality" />
                                                                    </a>
                                                                    <a href="profile.html">Cardiologist</a>
                                                                </h2>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                                                        <i className="fe fe-trash" /> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#SP005</td>
                                                            <td>
                                                                <h2 className="table-avatar">
                                                                    <a href="profile.html" className="avatar avatar-sm mr-2">
                                                                        <img className="avatar-img" src="img/specialities/specialities-05.png" alt="Speciality" />
                                                                    </a>
                                                                    <a href="profile.html">Dentist</a>
                                                                </h2>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="actions">
                                                                    <a className="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                                        <i className="fe fe-pencil" /> Edit
                                                                    </a>
                                                                    <a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
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
                    {/* /Page Wrapper */}

                </div>
            </div>

        </div>

    )
}