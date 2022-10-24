import React from 'react';
import title from '../../assets/images/title.png';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';
import { Switch, Tooltip } from "@material-tailwind/react";

const Header = () => {
    return (
        <header>
            <nav className='flex items-center justify-between py-5'>
                <div className='flex items-center gap-1'>
                    <img className='w-10 h-10' src={logo} alt="" />
                    <img className='w-32' src={title} alt="" />
                </div>
                <ul className='flex items-center gap-3'>
                    <li>Courses</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>
                        <Switch color="indigo" defaultChecked />
                    </li>
                    <li>
                        <Tooltip content="User Name">
                            <img className='w-10' src={avatar} alt="" />
                        </Tooltip>
                    </li>
                    <li><button className='bg-indigo-600 px-6 py-3 text-white font-medium rounded-lg'>Login</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;