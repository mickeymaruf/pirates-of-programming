import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='col-span-12 lg:col-span-8 xl:col-span-9 grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:pb-10'>
            {
                courses.map(course => <Course key={course.id} course={course} />)
            }
        </div>
    );
};

export default Courses;