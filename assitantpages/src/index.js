import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './login';
import Changepsw from './changepassword';
import Forgetpsw from './forgetpassword';
import Appoinment from './appoinment';
import Header from './menu';
function MyRouter(){
  return (
      <BrowserRouter>
          <Routes>
              <Route index path='/' element={<Appoinment />} />
              <Route path='/login' element={<Login />} />
        
              <Route path='/forget-password' element={<Forgetpsw />} />
              <Route path='/change-password' element={<Changepsw />} />
              
          </Routes>
      </BrowserRouter>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);

