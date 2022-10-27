import { Tooltip } from '@material-tailwind/react';
import React, { createRef } from 'react';
import { FaPrint, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const ref = createRef();
    const course = useLoaderData();
    const { id, name, thumbnail, description, benifits, rating, reviews, level, duration, preRequisites } = course;
    const benifitsList = benifits.split(", ");
    return (
        <div className='col-span-12 lg:col-span-9 border lg:mb-10'>
            <div className='flex items-center justify-between m-3'>
                <Link to={`/checkout/${id}`}>
                    <button className='bg-green-700 px-6 py-2 text-white font-medium rounded-lg'>Get premium access</button>
                </Link>
                <Pdf targetRef={ref} filename={`${name}.pdf`}>
                    {({ toPdf }) => <Tooltip content="Print" placement='bottom'><button onClick={toPdf}><FaPrint className='w-6 h-6 text-red-400' /></button></Tooltip>}
                </Pdf>
            </div>
            <img className='w-full' src={thumbnail} alt="" />
            <div ref={ref} className='p-5 pt-2'>
                <h3 className='text-4xl font-medium mb-2'>{name}</h3>
                <div className='text-sm text-gray-700'>
                    <p>{description}</p>
                    <strong className='text-black block my-3'>What you'll learn:</strong>
                    <ul className='list-disc ml-8'>
                        {benifitsList.map(item => <li>{item}</li>)}
                    </ul>
                    <strong className='text-black block my-3'>Pre-requirements:</strong>
                    {preRequisites}
                </div>
                <div className='text-sm text-gray-700'>
                    <div className='flex gap-1 mt-3'>
                        <FaStar className='text-yellow-700' /> <strong className='text-black'>{rating}</strong> ({reviews}k reviews)
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