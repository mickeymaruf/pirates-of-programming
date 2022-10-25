import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, thumbnail, description, benifits, ratings, reviews, level, duration, preRequirements } = course;
    const benifitsList = benifits.split(", ");
    return (
        <div className='col-span-9 border mb-10'>
                <img className='w-full' src={thumbnail} alt="" />
                <div className='p-5 pt-2'>
                    <h3 className='text-4xl font-medium my-2'>{name}</h3>
                    <p className='text-sm text-gray-700'>
                        <p>{description}</p>
                        <strong className='text-black block my-3'>What you'll learn:</strong>
                        {benifitsList.map(item => <li>{item}</li>)}
                        <strong className='text-black block my-3'>Pre-requirements:</strong>
                        {preRequirements}
                    </p>
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

export default CourseDetails;