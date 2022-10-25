import { Input } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import SocialAuth from './SocialAuth';
import toast from 'react-hot-toast';

const Login = () => {
    const { login } = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className='w-6/12 mx-auto'>
            <form onSubmit={handleSubmit} className='mt-20 border border-gray-400 rounded-md p-10'>
                <h3 className='text-3xl font-medium mb-10'>Login</h3>
                <div className='mb-7'>
                    <Input type="email" name="email" variant="standard" label="Email" />
                </div>
                <div className='mb-8'>
                    <Input type="password" name="password" variant="standard" label="Password" />
                    <p className='mt-3 font-medium text-yellow-900 text-sm'>Forgot Password</p>
                </div>
                <button className='btn-theme mb-5' type="submit">Login</button>
                <p className='text-center'>Don't have an account? <Link to="/signup" className='text-yellow-900 font-medium underline'>Create an account</Link></p>
            </form>
            <SocialAuth />
        </div>
    );
};

export default Login;