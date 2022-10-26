import { Input } from '@material-tailwind/react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import SocialAuth from './SocialAuth';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const { login, resetPassword } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // checking input fields are empty or not
        if (!email || !password) {
            toast.error("Field can't be empty!")
            return;
        }
        login(email, password)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const handleForgotPassword = () => {
        toast.custom((t) => (
            <form onSubmit={handleResetPasswordEmail}
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className=''>
                        <Input type="email" name="email" variant="standard" label="Enter Your Email" />
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Send
                    </button>
                </div>
            </form>
        ))
    }
    const handleResetPasswordEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        resetPassword(email)
            .then(() => {
                toast.success("A password reset mail had been sent!")
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }
    return (
        <div className='md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto'>
            <form onSubmit={handleSubmit} className='mt-10 md:mt-20 border border-gray-400 rounded-md p-10'>
                <h3 className='text-3xl font-medium mb-10'>Login</h3>
                <div className='mb-7'>
                    <Input type="email" name="email" variant="standard" label="Email" />
                </div>
                <div className='mb-8'>
                    <Input type="password" name="password" variant="standard" label="Password" />
                    <p onClick={handleForgotPassword} className='mt-3 font-medium text-yellow-900 text-sm cursor-pointer'>Forgot Password</p>
                </div>
                <button className='btn-theme w-full mb-5' type="submit">Login</button>
                <p className='text-center'>Don't have an account? <Link to="/signup" className='text-yellow-900 font-medium underline'>Create an account</Link></p>
            </form>
            <SocialAuth />
        </div>
    );
};

export default Login;