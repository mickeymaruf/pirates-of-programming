import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, thumbnail, benifits, rating, reviews, level, duration } = course;
    return (
        <div className='border hover:shadow-xl'>
            <Link to={`/courses/course/${id}`}>
                <img className='object-cover h-36 w-full' src={thumbnail} alt="" />
                <div className='p-3 pt-0'>
                    <h3 className='text-xl font-medium my-2'>{name}</h3>
                    <p className='text-sm text-gray-700'><strong className='text-black'>What you'll learn:</strong> {benifits.length > 100 ? benifits.slice(0, 100) + "  ..." : benifits}</p>
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
            </Link>
        </div>
    );
};

export default Course;