import { Input } from '@material-tailwind/react';
import React from 'react';
import toast from 'react-hot-toast';
import { FaEnvelope } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthProvider';

const Profile = () => {
    const { user, updateUser } = useAuth();
    const { displayName, photoURL, email, uid, emailVerified } = user;
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        updateUser(name, photoURL)
            .then(() => {
                toast.success("Profile Updated, Refresh 🔄");
            }).catch(error => {
                toast.error(error.message);
            });
    }
    console.log(user);
    return (
        <div className='w-[90%] mx-auto grid grid-cols-5 gap-12 my-16'>
            <div className='col-span-2 self-start flex p-5 gap-4 rounded-lg border border-gray-400'>
                <div className='flex items-center gap-2'>
                    <div className='relative w-20'>
                        {
                            photoURL ?
                                <img className='rounded-full' src={photoURL} alt="" />
                                :
                                <div className='bg-slate-900 w-20 h-20 rounded-full'></div>
                        }
                        <div className='h-4 w-4 rounded-full bg-green-500 absolute bottom-0 right-0 -translate-x-1/2'></div>
                    </div>
                    <div>
                        <h3 className='font-medium text-xl'>{displayName}</h3>
                        {email && <p className='flex items-center gap-2'><FaEnvelope /> {email}</p>}
                        <small className='text-slate-400'>Email Status: {emailVerified ? <span className='text-green-500 font-medium'>Verified</span> : <span className='text-red-500 font-medium'>Not verified</span>}</small>
                        <p className='text-sm'>Id: {uid}</p>
                    </div>
                </div>

            </div>
            <div className='col-span-3'>
                <form onSubmit={handleSubmit} className='border border-gray-400 rounded-md p-10'>
                    <h3 className='text-3xl font-medium mb-10'>Edit Profile</h3>
                    <div className='mb-7'>
                        <Input type="email" name="email" variant="standard" label="Email" readOnly defaultValue={email} />
                    </div>
                    <div className='mb-7'>
                        <Input type="text" name="name" variant="standard" label="Full Name" defaultValue={displayName} />
                    </div>
                    <div className='mb-7'>
                        <Input type="text" name="photoURL" variant="standard" label="Photo URL" defaultValue={photoURL} />
                    </div>
                    <button className='btn-theme w-full' type="submit">Save Changes</button>
                </form>
            </div>

        </div>
    );
};

export default Profile;