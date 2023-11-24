import React from "react";
export default function AdminMenu()
{
    return(
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                    <li className="menu-title">
                        <span>Main</span>
                    </li>
                    <li className="active">
                        <a href="/"><i className="fe fe-home" /> <span>Dashboard</span></a>
                    </li>
                    <li>
                        <a href="/doctor-list"><i className="fe fe-users" /> <span>View Doctors</span></a>
                    </li>
                  
                    <li>
                        <a href="appointment-list.html"><i className="fe fe-user-plus" /> <span>Message</span></a>
                    </li>
                    <li>
                        <a href="/service"><i className="fe fe-vector" />  <span>View Service</span></a>
                    </li>
                    <li>
                        <a href="/assitant"><i className="fe fe-user" /> <span>View Assitant</span></a>
                    </li>
                    <li>
                        <a href="/appoinment"><i className="fe fe-vector" /> <span>View Appointment</span></a>
                    </li>
                    <li>
                        <a href="/profile"><i className="fe fe-vector" /> <span>Profile</span></a>
                    </li>
                    
                    <li>
                        <a href="/login"><i className="fe fe-vector" /> <span>Login</span></a>
                    </li>
                    <li>
                        <a href="/register"><i className="fe fe-vector" /> <span>Register</span></a>
                    </li>
                    <li>
                        <a href="/Forget-password"><i className="fe fe-vector" /> <span>Forget Password</span></a>
                    </li>
                    <li>
                        <a href="/lockscreen"><i className="fe fe-vector" /> <span>Lock page</span></a>
                    </li>
                    
                   
                 </ul>
                   
            </div>
        </div>
    </div>
   
    )
}