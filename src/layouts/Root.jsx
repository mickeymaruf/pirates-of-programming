import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';

const Root = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;