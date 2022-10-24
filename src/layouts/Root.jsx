import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Header />
            <Outlet />
        </div>
    );
};

export default Root;