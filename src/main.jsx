import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/home/Home.jsx';
import Video from './views/Video.jsx';
import Header from './components/header/header.jsx';
import Admin from './views/Admin.jsx';
import Login from './components/Login/Login.jsx';
import ProtectedRoute from './utils/ProtectedRoute';
import { AuthProvider } from './utils/AuthContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <div className='glassy-rectangle'>
          <Header />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute component={App} />} />
            <Route path="/day/:id/:subId" element={<ProtectedRoute component={Video} />} />
            <Route path="/home" element={<ProtectedRoute component={Home} />} />
            <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
