import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='col-span-9 grid grid-cols-3 gap-5 pb-10'>
            {
                courses.map(course => <Course key={course.id} course={course} />)
            }
        </div>
    );
};

export default Courses;