import React from 'react';
import { Link } from 'react-router-dom';
import title from '../../assets/images/title.png';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
            <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <Link to="/" className='flex items-center gap-3 z-20'>
                        <img className='w-8 h-8' src={logo} alt="" />
                        <img className='w-28' src={title} alt="" />
                    </Link>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li className='hover:underline mb-4'>
                                Tailwind
                            </li>
                            <li className='hover:underline mb-4'>
                                Material Tailwind
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <a target="_blank" href="https://github.com/mickeymaruf" class="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/mickeymaruf/" class="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="text-center">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://pirates-of-programming.web.app/" class="hover:underline">Pirates of Programming™</a>. All Rights Reserved.
                </span>
            </div>
        </footer>

    );
};

export default Footer;