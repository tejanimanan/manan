import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './profile';
import UserHome from './userhome';
import Login from './login';
import Register from './UserRegister';
import UserForgetpsw from './UserForgetpasw';
import Booking from './booking';
import Changepsw from './changepsw';
import LockScreen from './lockscreen';
import Search from './search';
import DoctorProfile from './doctorprofile';
import VideoCall from './videocall';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<UserHome />} />
                <Route path='/profile' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/video-call' element={<VideoCall />} />

                <Route path='/booking' element={<Booking />} />
                <Route path='/doctor-profile' element={<DoctorProfile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/lockscreen' element={<LockScreen />} />
                <Route path='/forget-password' element={<UserForgetpsw />} />
                <Route path='/change-password' element={<Changepsw />} />
                
            </Routes>
        </BrowserRouter>
    );

}

root.render(<MyRouter />);

