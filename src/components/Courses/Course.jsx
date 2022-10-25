import React from 'react';
import { FaStar } from 'react-icons/fa';

const Course = ({ course }) => {
    const { id, name, thumbnail, benifits, ratings, reviews, level, duration } = course;
    return (
        <div className='border'>
            <img className='h-36 w-full' src={thumbnail} alt="" />
            <div className='p-3 pt-0'>
                <h3 className='text-xl font-medium my-2'>{name}</h3>
                <p className='text-sm text-gray-700'><strong className='text-black'>What you'll learn:</strong> {benifits.slice(0, 100)}...</p>
                <div className='text-sm text-gray-700'>
                    <div className='flex gap-1 mt-3'>
                        <FaStar className='text-yellow-700' /> <strong className='text-black'>{ratings}</strong> ({reviews}k reviews)
                    </div>
                    <div>
                        <span className='mr-1'>{level}</span>
                        <span>{duration}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;