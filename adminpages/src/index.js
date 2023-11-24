import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import AdminProfile from './AdminProfile';
import AdminRegister from './AdminRegister';
import AdminForgetpsw from './AdminForgetpasw';
import AdminLockScreen from './AdminLockscreen';
import AdminDoctorlist from './AdminDoctorlist';
import AdminService from './AdminService';
import AdminAppoinment from './AdminAppointment';
import AdminNotification from './Adminnotification';
import AdminAssitant from './AdminAssitant';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<AdminHome />} />
                <Route path='/login' element={<AdminLogin />} />
                <Route path='/profile' element={<AdminProfile />} />
                <Route path='/doctor-list' element={<AdminDoctorlist />} />
                <Route path='/assitant' element={<AdminAssitant />} />
                <Route path='/appoinment' element={<AdminAppoinment />} />
                <Route path='/service' element={<AdminService />} />
                <Route path='/notification' element={<AdminNotification />} />
                <Route path='/register' element={<AdminRegister />} />
                <Route path='/lockscreen' element={<AdminLockScreen />} />
                <Route path='/forget-password' element={<AdminForgetpsw />} />
            
            </Routes>
        </BrowserRouter>
    );

}

root.render(<MyRouter />);

