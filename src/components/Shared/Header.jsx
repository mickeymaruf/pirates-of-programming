import React, { useState } from 'react';
import title from '../../assets/images/title.png';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';
import { Switch, Tooltip } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { BiSun } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';
import { useAuth } from '../../contexts/AuthProvider';

const Header = () => {
    const [theme, setTheme] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => { }).catch(error => console.log(error));
    }
    const closeMenu = () => {
        setToggle(false);
    }
    return (
        <header>
            <nav className='flex items-center justify-between py-5'>
                <Link onClick={closeMenu} to="/" className='flex items-center gap-1 z-20'>
                    <img className='w-8 h-8' src={logo} alt="" />
                    <img className='w-28' src={title} alt="" />
                </Link>
                <ul className={`flex flex-col md:flex-row bg-gray-200 md:bg-transparent items-center gap-5 absolute md:static ${toggle ? "top-20" : "-top-96"} left-0 w-full md:w-fit py-5 md:py-0 duration-300 z-10`}>
                    <li onClick={closeMenu}><Link to="/courses">Courses</Link></li>
                    <li onClick={closeMenu}>FAQ</li>
                    <li onClick={closeMenu}>Blog</li>
                    <li>
                        <Switch onClick={() => setTheme(!theme)} color="indigo" label={theme ? <BiSun className='w-5 h-5' /> : <BsMoonStars className='w-5 h-5' />} />
                    </li>
                    {
                        user && user.uid ?
                            <>
                                <li>
                                    <Tooltip content={user.displayName || "User Name"}>
                                        {
                                            user.photoURL ?
                                                <img className='w-10 h-10 rounded-full border' src={user.photoURL} alt="" />
                                                :
                                                <img className='w-10 rounded-full' src={avatar} alt="" />
                                        }
                                    </Tooltip>
                                </li>
                                <li onClick={closeMenu}>
                                    <button onClick={handleLogout} className='btn-theme'>Logout</button>
                                </li>
                            </>
                            :
                            <li onClick={closeMenu}>
                                <Link to="/login"><button className='btn-theme'>Login</button></Link>
                            </li>
                    }
                </ul>
                <button className='md:hidden bg-gray-200 p-2 z-20' onClick={() => setToggle(!toggle)}>
                    {
                        toggle ?
                        <GrClose className='w-8 h-8' />
                        :
                        <HiOutlineBars3 className='w-8 h-8' />
                    }
                </button>
            </nav>
        </header>
    );
};

export default Header;