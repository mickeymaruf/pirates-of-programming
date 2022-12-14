import { Input } from '@material-tailwind/react';
import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import SocialAuth from './SocialAuth';

const Signup = () => {
    const { createUser, updateUser, verifyEmail } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // checking input fields are empty or not
        if (!name || !email || !password) {
            toast.error("Field can't be empty!")
            return;
        }
        createUser(email, password)
            .then(result => {
                updateUser(name, photoURL)
                    .then(() => { }).catch(error => console.log(error));
                verifyEmail()
                    .then(() => {
                        toast("A verification mail has been sent! verify to login.", { icon: '👏', })
                        navigate("/login");
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className='md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto'>
            <form onSubmit={handleSubmit} className='mt-10 md:mt-20 border border-gray-400 rounded-md p-10'>
                <h3 className='text-3xl font-medium mb-10'>Sign Up</h3>
                <div className='mb-7'>
                    <Input type="text" name="name" variant="standard" label="Full name" />
                </div>
                <div className='mb-7'>
                    <Input type="text" name="photoURL" variant="standard" label="Photo URL" />
                </div>
                <div className='mb-7'>
                    <Input type="email" name="email" variant="standard" label="Email" />
                </div>
                <div className='mb-8'>
                    <Input type="password" name="password" variant="standard" label="Password" />
                </div>
                <button className='btn-theme w-full mb-5' type="submit">Sign Up</button>
                <p className='text-center'>Already have an account? <Link to="/login" className='text-yellow-900 font-medium underline'>Login</Link></p>
            </form>
            <SocialAuth />
        </div>
    );
};

export default Signup;