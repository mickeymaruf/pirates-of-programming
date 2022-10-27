import { Input } from '@material-tailwind/react';
import React from 'react';

const Blog = () => {
    return (
        <div className='pb-10'>
            <h1 className='text-4xl font-bold text-center mb-2'>Blog</h1>
            <p className='text-center font-thin text-xl mb-4'>All the latest blog and news, straight from the team.</p>
            <div className='mb-10 flex w-96 mx-auto gap-4'>
                <Input type="email" name="email" label="Email" />
                <button className='py-2 bg-indigo-500 rounded-lg px-3 text-white font-medium'>Subscribe</button>
            </div>
            <div className='border-l pl-10 w-full md:w-9/12 mx-auto lg:mr-20'>
                <div className='relative hover:bg-gray-100 p-5 rounded-lg mb-5 duration-100 font-theme'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full absolute -left-[41px] -translate-x-1/2 top-1/2'></div>
                    <div className='hidden md:block absolute -left-24 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-1'>
                        26 Oct, 2022
                    </div>
                    <h4 className='text-lg font-bold mb-2'>What is cors?</h4>
                    <p>
                        Cors means Cross-origin resource sharing. It is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                    </p>
                </div>
                <div className='relative hover:bg-gray-100 p-5 rounded-lg mb-5 duration-100 font-theme'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full absolute -left-[41px] -translate-x-1/2 top-1/2'></div>
                    <div className='hidden md:block absolute -left-24 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-1'>
                        26 Oct, 2022
                    </div>
                    <h4 className='text-lg font-bold mb-2'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>
                        Firebase is great for quick projects. It's easy to set up, fast, in many cases requires only front-end logic. It lets us focus on our app instead of implementing custom authentication, web sockets or database connections. <br />
                        Alternatives of firebase:<br />
                        Redis, Parse, AWS Amplify, Azure, MongoDB
                    </p>
                </div>
                <div className='relative hover:bg-gray-100 p-5 rounded-lg mb-5 duration-100 font-theme'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full absolute -left-[41px] -translate-x-1/2 top-1/2'></div>
                    <div className='hidden md:block absolute -left-24 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-1'>
                        26 Oct, 2022
                    </div>
                    <h4 className='text-lg font-bold mb-2'>How does the private route work?</h4>
                    <p>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </div>
                <div className='relative hover:bg-gray-100 p-5 rounded-lg mb-10 duration-100 font-theme'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full absolute -left-[41px] -translate-x-1/2 top-1/2'></div>
                    <div className='hidden md:block absolute -left-24 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-1'>
                        26 Oct, 2022
                    </div>
                    <h4 className='text-lg font-bold mb-2'>What is Node? How does Node work?</h4>
                    <p>
                        Node.js is a javascript runtime used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;