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
        <div className='col-span-12 lg:col-span-8 xl:col-sapn-9 border lg:mb-10'>
            <Link to={`/checkout/${id}`}>
                <button className='bg-green-700 px-6 py-2 text-white font-medium rounded-lg m-3 mb-0'>Get premium access</button>
            </Link>
            <div className='flex items-center gap-3 m-3 mt-2'>
                <h3 className='text-4xl font-medium'>{name}</h3>
                <Pdf targetRef={ref} filename={`${name}.pdf`}>
                    {({ toPdf }) => <Tooltip content="Print" placement='bottom'><button onClick={toPdf}><FaPrint className='w-6 h-6 text-red-400' /></button></Tooltip>}
                </Pdf>
            </div>
            <img className='w-full' src={thumbnail} alt="" />
            <div ref={ref} className='print:p-10 p-5 pt-2'>
                <div className='text-sm text-gray-700'>
                    <p>{description}</p>
                    <strong className='text-black block my-3'>What you'll learn:</strong>
                    {benifitsList.map(item => <li>{item}</li>)}
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