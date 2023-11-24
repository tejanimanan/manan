import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorHome from './doctorHome';
import DoctorLogin from './doctorlogin';
import DoctorRegister from './doctorregister';
import DoctorForgetpsw from './doctorforgetpsw';
import DoctorChangepsw from './doctorchangepsw';
import DoctorProfile from './doctorprofile';
import ProfileSetting from './profilesetting';
import Appoinment from './doctorappoinment';
import DoctorLockScreen from './doctorlock';
import Review from './review';
import SocialMedia from './socialmedia';
import DoctorService from './DoctorService';
import DoctorAssitant from './Assitantlist';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<DoctorHome />} />
                <Route path='/login' element={<DoctorLogin />} />
                <Route path='/lockscreen' element={<DoctorLockScreen />} />
                <Route path='/register' element={<DoctorRegister />} />
                <Route path='/profile' element={<DoctorProfile />} />
                <Route path='/reviews' element={<Review />} />
                <Route path='/appoinment' element={<Appoinment />} />
                <Route path='/services' element={<DoctorService />} />
                <Route path='/my-assitant' element={<DoctorAssitant />} />
                <Route path='/social-media' element={<SocialMedia />} />
                <Route path='/profile-setting' element={<ProfileSetting />} />
                <Route path='/forget-password' element={<DoctorForgetpsw />} />
                <Route path='/change-password' element={<DoctorChangepsw />} />
                
            </Routes>
        </BrowserRouter>
    );

}

root.render(<MyRouter />);

