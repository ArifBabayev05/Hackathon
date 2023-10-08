import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';
import '../assets/styles/appLayout.css';

const AppLayout = () => {
    return (
        <div className="app-layout">
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;
