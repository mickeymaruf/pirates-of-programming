import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-3 border self-start'>
                {
                    courses.map((course, idx) => <div key={idx + '-' + course.id}>
                        {course.name}
                    </div>)
                }
            </div>
            <div className='col-span-9 grid grid-cols-3 gap-5 pb-10'>
                {
                    courses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;