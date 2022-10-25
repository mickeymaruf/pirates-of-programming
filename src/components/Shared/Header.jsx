import React, { useState } from 'react';
import title from '../../assets/images/title.png';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';
import { Switch, Tooltip } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { BiSun } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';

const Header = () => {
    const [theme, setTheme] = useState(false);
    return (
        <header>
            <nav className='flex items-center justify-between py-5'>
                <Link to="/" className='flex items-center gap-1'>
                    <img className='w-8 h-8' src={logo} alt="" />
                    <img className='w-28' src={title} alt="" />
                </Link>
                <ul className='flex items-center gap-5'>
                    <li><Link to="/courses">Courses</Link></li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>
                        <Switch onClick={() => setTheme(!theme)} color="indigo" label={theme ? <BiSun className='w-5 h-5' /> : <BsMoonStars className='w-5 h-5' />} />
                    </li>
                    <li>
                        <Tooltip content="User Name">
                            <img className='w-10' src={avatar} alt="" />
                        </Tooltip>
                    </li>
                    <li>
                        <Link to="/login"><button className='btn-theme'>Login</button></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;