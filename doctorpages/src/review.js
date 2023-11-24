import React from "react";
import DoctorHeader from "./doctorheader";
import DoctorMenu from "./doctormenu";
import DoctorFooter from "./doctorfooter";
export default function Review() {
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
                            <h2 className="breadcrumb-title">Review</h2>
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
                            <div className="doc-review review-listing">
                                {/* Review Listing */}
                                <ul className="comments-list">
                                    {/* Comment List */}
                                    <li>
                                        <div className="comment">
                                            <img className="avatar rounded-circle" alt="User Image" src="img/patients/patient.jpg" />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Richard Wilson</span>
                                                    <span className="comment-date">Reviewed 2 Days ago</span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star" />
                                                    </div>
                                                </div>
                                                <p className="recommended"><i className="far fa-thumbs-up" /> I recommend the doctor</p>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                                    Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Comment Reply */}
                                        <ul className="comments-reply">
                                            {/* Comment Reply List */}
                                            <li>
                                                <div className="comment">
                                                    <img className="avatar rounded-circle" alt="User Image" src="img/doctors/doctor-thumb-02.jpg" />
                                                    <div className="comment-body">
                                                        <div className="meta-data">
                                                            <span className="comment-author">Dr. Darren Elder</span>
                                                            <span className="comment-date">Reviewed 3 Days ago</span>
                                                        </div>
                                                        <p className="comment-content">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            Ut enim ad minim veniam.
                                                            Curabitur non nulla sit amet nisl tempus
                                                        </p>
                                                        <div className="comment-reply">
                                                            <a className="comment-btn" href="#">
                                                                <i className="fas fa-reply" /> Reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* /Comment Reply List */}
                                        </ul>
                                        {/* /Comment Reply */}
                                    </li>
                                    {/* /Comment List */}
                                    {/* Comment List */}
                                    <li>
                                        <div className="comment">
                                            <img className="avatar rounded-circle" alt="User Image" src="img/patients/patient2.jpg" />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Travis Trimble</span>
                                                    <span className="comment-date">Reviewed 4 Days ago</span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                                    Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* /Comment List */}
                                    {/* Comment List */}
                                    <li>
                                        <div className="comment">
                                            <img className="avatar rounded-circle" alt="User Image" src="img/patients/patient3.jpg" />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Carl Kelly</span>
                                                    <span className="comment-date">Reviewed 5 Days ago</span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                                    Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* /Comment List */}
                                    {/* Comment List */}
                                    <li>
                                        <div className="comment">
                                            <img className="avatar rounded-circle" alt="User Image" src="img/patients/patient4.jpg" />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Michelle Fairfax</span>
                                                    <span className="comment-date">Reviewed 6 Days ago</span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                                    Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* /Comment List */}
                                    {/* Comment List */}
                                    <li>
                                        <div className="comment">
                                            <img className="avatar rounded-circle" alt="User Image" src="img/patients/patient5.jpg" />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Gina Moore</span>
                                                    <span className="comment-date">Reviewed 1 Week ago</span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                                    Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* /Comment List */}
                                    {/* Comment List */}
                                    <li>
                                        <div className="comment">
                                            <img className="avatar rounded-circle" alt="User Image" src="img/patients/patient9.jpg" />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Walter Roberson</span>
                                                    <span className="comment-date">Reviewed 1 Week ago</span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                                    Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* /Comment List */}
                                    {/* Comment List */}
                                    <li>
                                        <div className="comment">
                                            <img className="avatar rounded-circle" alt="User Image" src="img/patients/patient8.jpg" />
                                            <div className="comment-body">
                                                <div className="meta-data">
                                                    <span className="comment-author">Daniel Griffing</span>
                                                    <span className="comment-date">Reviewed on 1 Nov 2019</span>
                                                    <div className="review-count rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                    </div>
                                                </div>
                                                <p className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation.
                                                    Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                <div className="comment-reply">
                                                    <a className="comment-btn" href="#">
                                                        <i className="fas fa-reply" /> Reply
                                                    </a>
                                                    <p className="recommend-btn">
                                                        <span>Recommend?</span>
                                                        <a href="#" className="like-btn">
                                                            <i className="far fa-thumbs-up" /> Yes
                                                        </a>
                                                        <a href="#" className="dislike-btn">
                                                            <i className="far fa-thumbs-down" /> No
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* /Comment List */}
                                </ul>
                                {/* /Comment List */}
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