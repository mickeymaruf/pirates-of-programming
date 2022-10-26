import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { name, thumbnail, rating, reviews } = course;
    return (
        <div>
            <h1 className='text-4xl font-medium text-center text-gray-900 mb-5'>Checkout</h1>
            <div className='border p-2 bg-gray-200 text-gray-800 flex items-center gap-5 rounded-lg w-2/3 mx-auto'>
                <img className='w-48 rounded-lg' src={thumbnail} alt="" />
                <h3 className='text-2xl font-medium'>{name}</h3>
                <div className='flex gap-1 ml-auto text-sm mr-3'>
                    <FaStar className='text-yellow-700' /> <strong className='text-black'>{rating}</strong> ({reviews}k reviews)
                </div>
            </div>
        </div>
    );
};

export default Checkout;