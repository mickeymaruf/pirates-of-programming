import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const CourseLayout = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 order-last lg:order-first lg:col-span-4 xl:col-span-3 border self-start p-4 flex flex-col gap-1 lg:sticky top-0 mb-8 lg:mb-0'>
                <h2 className='text-2xl font-medium mb-2'>Popular Courses</h2>
                {
                    courses.map((course, idx) => <Link to={`/courses/course/${course.id}`} className='text-indigo-500 p-1 hover:bg-gray-200 flex justify-between items-center' key={idx + '-' + course.id}>
                        <span>{course.name}</span> <BsChevronRight />
                    </Link>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default CourseLayout;