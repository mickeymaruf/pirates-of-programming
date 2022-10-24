import { Input } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import SocialAuth from './SocialAuth';

const Login = () => {
    return (
        <div className='w-6/12 mx-auto'>
            <div className='mt-20 border border-gray-400 rounded-md p-10'>
                <h3 className='text-3xl font-medium mb-10'>Login</h3>
                <div className='mb-7'>
                    <Input type="email" variant="standard" label="Email" />
                </div>
                <div className='mb-8'>
                    <Input type="password" variant="standard" label="Password" />
                    <p className='mt-3 font-medium text-yellow-900 text-sm'>Forgot Password</p>
                </div>
                <button className='btn-theme mb-5' type="submit">Login</button>
                <p className='text-center'>Don't have an account? <Link to="/signup" className='text-yellow-900 font-medium underline'>Create an account</Link></p>
            </div>
            <SocialAuth />
        </div>
    );
};

export default Login;