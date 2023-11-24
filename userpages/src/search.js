import UserHeader from "./userheader";

export default function Search() {
    return (
        <div className="">
            <UserHeader/>
            <div>
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-8 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Search</li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">2245 matches found for : Dentist In Bangalore</h2>
                            </div>
                            <div className="col-md-4 col-12 d-md-block d-none">
                                <div className="sort-by">
                                    <span className="sort-title">Sort by</span>
                                    <span className="sortby-fliter">
                                        <select className="select">
                                            <option>Select</option>
                                            <option className="sorting">Rating</option>
                                            <option className="sorting">Popular</option>
                                            <option className="sorting">Latest</option>
                                            <option className="sorting">Free</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Breadcrumb */}
                {/* Page Content */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                                {/* Search Filter */}
                                <div className="card search-filter">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Search Filter</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="filter-widget">
                                            <div className="cal-icon">
                                                <input type="text" className="form-control datetimepicker" placeholder="Select Date" />
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Gender</h4>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="gender_type" defaultChecked />
                                                    <span className="checkmark" /> Male Doctor
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="gender_type" />
                                                    <span className="checkmark" /> Female Doctor
                                                </label>
                                            </div>
                                        </div>
                                        <div className="filter-widget">
                                            <h4>Select Specialist</h4>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_specialist" defaultChecked />
                                                    <span className="checkmark" /> Urology
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_specialist" defaultChecked />
                                                    <span className="checkmark" /> Neurology
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_specialist" />
                                                    <span className="checkmark" /> Dentist
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_specialist" />
                                                    <span className="checkmark" /> Orthopedic
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_specialist" />
                                                    <span className="checkmark" /> Cardiologist
                                                </label>
                                            </div>
                                            <div>
                                                <label className="custom_check">
                                                    <input type="checkbox" name="select_specialist" />
                                                    <span className="checkmark" /> Cardiologist
                                                </label>
                                            </div>
                                        </div>
                                        <div className="btn-search">
                                            <button type="button" className="btn btn-block">Search</button>
                                        </div>
                                    </div>
                                </div>
                                {/* /Search Filter */}
                            </div>
                            <div className="col-md-12 col-lg-8 col-xl-9">
                                {/* Doctor Widget */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="doctor-widget">
                                            <div className="doc-info-left">
                                                <div className="doctor-img">
                                                    <a href="doctor-profile.html">
                                                        <img src=" img/doctors/doctor-thumb-01.jpg" className="img-fluid" alt="User Image" />
                                                    </a>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><a href="doctor-profile.html">Dr. Ruby Perrin</a></h4>
                                                    <p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                                    <h5 className="doc-department"><img src=" img/specialities/specialities-05.png" className="img-fluid" alt="Speciality" />Dentist</h5>
                                                    <div className="rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star" />
                                                        <span className="d-inline-block average-rating">(17)</span>
                                                    </div>
                                                    <div className="clinic-details">
                                                        <p className="doc-location"><i className="fas fa-map-marker-alt" /> Florida, USA</p>
                                                        <ul className="clinic-gallery">
                                                            <li>
                                                                <a href=" img/features/feature-01.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-01.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-02.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-02.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-03.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-03.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-04.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-04.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="clinic-services">
                                                        <span>Dental Fillings</span>
                                                        <span> Whitneing</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clini-infos">
                                                    <ul>
                                                        <li><i className="far fa-thumbs-up" /> 98%</li>
                                                        <li><i className="far fa-comment" /> 17 Feedback</li>
                                                        <li><i className="fas fa-map-marker-alt" /> Florida, USA</li>
                                                        <li><i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /> </li>
                                                    </ul>
                                                </div>
                                                <div className="clinic-booking">
                                                    <a className="view-pro-btn" href="/doctor-profile">View Profile</a>
                                                    <a className="apt-btn" href=" /booking">Book Appointment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Doctor Widget */}
                                {/* Doctor Widget */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="doctor-widget">
                                            <div className="doc-info-left">
                                                <div className="doctor-img">
                                                    <a href="doctor-profile.html">
                                                        <img src=" img/doctors/doctor-thumb-02.jpg" className="img-fluid" alt="User Image" />
                                                    </a>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
                                                    <p className="doc-speciality">BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                                                    <h5 className="doc-department"><img src=" img/specialities/specialities-05.png" className="img-fluid" alt="Speciality" />Dentist</h5>
                                                    <div className="rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star" />
                                                        <span className="d-inline-block average-rating">(35)</span>
                                                    </div>
                                                    <div className="clinic-details">
                                                        <p className="doc-location"><i className="fas fa-map-marker-alt" /> Newyork, USA</p>
                                                        <ul className="clinic-gallery">
                                                            <li>
                                                                <a href=" img/features/feature-01.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-01.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-02.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-02.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-03.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-03.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-04.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-04.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="clinic-services">
                                                        <span>Dental Fillings</span>
                                                        <span> Whitneing</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clini-infos">
                                                    <ul>
                                                        <li><i className="far fa-thumbs-up" /> 100%</li>
                                                        <li><i className="far fa-comment" /> 35 Feedback</li>
                                                        <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                                                        <li><i className="far fa-money-bill-alt" /> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                                                    </ul>
                                                </div>
                                                <div className="clinic-booking">
                                                    <a className="view-pro-btn" href="/doctor-profile">View Profile</a>
                                                    <a className="apt-btn" href=" /booking">Book Appointment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Doctor Widget */}
                                {/* Doctor Widget */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="doctor-widget">
                                            <div className="doc-info-left">
                                                <div className="doctor-img">
                                                    <a href="doctor-profile.html">
                                                        <img src=" img/doctors/doctor-thumb-03.jpg" className="img-fluid" alt="User Image" />
                                                    </a>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name"><a href="doctor-profile.html">Dr. Deborah Angel</a></h4>
                                                    <p className="doc-speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
                                                    <p className="doc-department"><img src=" img/specialities/specialities-04.png" className="img-fluid" alt="Speciality" />Cardiology</p>
                                                    <div className="rating">
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star filled" />
                                                        <i className="fas fa-star" />
                                                        <span className="d-inline-block average-rating">(27)</span>
                                                    </div>
                                                    <div className="clinic-details">
                                                        <p className="doc-location"><i className="fas fa-map-marker-alt" /> Georgia, USA</p>
                                                        <ul className="clinic-gallery">
                                                            <li>
                                                                <a href=" img/features/feature-01.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-01.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-02.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-02.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-03.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-03.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href=" img/features/feature-04.jpg" data-fancybox="gallery">
                                                                    <img src=" img/features/feature-04.jpg" alt="Feature" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="clinic-services">
                                                        <span>Dental Fillings</span>
                                                        <span> Whitneing</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clini-infos">
                                                    <ul>
                                                        <li><i className="far fa-thumbs-up" /> 99%</li>
                                                        <li><i className="far fa-comment" /> 35 Feedback</li>
                                                        <li><i className="fas fa-map-marker-alt" /> Newyork, USA</li>
                                                        <li><i className="far fa-money-bill-alt" /> $100 - $400 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /></li>
                                                    </ul>
                                                </div>
                                                <div className="clinic-booking">
                                                    <a className="view-pro-btn" href="/doctor-profile">View Profile</a>
                                                    <a className="apt-btn" href=" /booking">Book Appointment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-more text-center">
                                    <a className="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}