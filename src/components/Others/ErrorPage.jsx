import React from 'react';
import { BsEmojiFrown, BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='text-5xl font-thin'>
                <BsEmojiFrown className='w-20 h-20 block mx-auto' />
                <span className='block my-2'>404 Page Not Found !</span>
                <Link to="/"><BsArrowLeft className='mx-auto' /></Link>
            </div>
        </div>
    );
};

export default ErrorPage;