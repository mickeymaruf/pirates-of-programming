import { Input } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import SocialAuth from './SocialAuth';

const Signup = () => {
    return (
        <div className='w-6/12 mx-auto'>
            <div className='mt-20 border border-gray-400 rounded-md p-10'>
                <h3 className='text-3xl font-medium mb-10'>Sign Up</h3>
                <div className='mb-7'>
                    <Input type="text" variant="standard" label="Full name" />
                </div>
                <div className='mb-7'>
                    <Input type="text" variant="standard" label="Photo URL" />
                </div>
                <div className='mb-7'>
                    <Input type="email" variant="standard" label="Email" />
                </div>
                <div className='mb-8'>
                    <Input type="password" variant="standard" label="Password" />
                </div>
                <button className='btn-theme mb-5' type="submit">Sign Up</button>
                <p className='text-center'>Already have an account? <Link to="/login" className='text-yellow-900 font-medium underline'>Login</Link></p>
            </div>
            <SocialAuth />
        </div>
    );
};

export default Signup;