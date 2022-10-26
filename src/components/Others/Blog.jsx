import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-4xl font-medium text-center mb-5'>Blog</h1>
            <div className='bg-gray-300 p-5 rounded-lg mb-5'>
                <h4 className='text-2xl font-medium mb-2'>What is cors?</h4>
                <p>
                    Cors means Cross-origin resource sharing. It is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                </p>
            </div>
            <div className='bg-gray-300 p-5 rounded-lg mb-5'>
                <h4 className='text-2xl font-medium mb-2'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>
                    Firebase is great for quick projects. It's easy to set up, fast, in many cases requires only front-end logic. It lets us focus on our app instead of implementing custom authentication, web sockets or database connections. <br />
                    Alternatives of firebase:
                    <p className='font-medium'>
                        Redis, Parse, AWS Amplify, Azure, MongoDB
                    </p>
                </p>
            </div>
            <div className='bg-gray-300 p-5 rounded-lg mb-5'>
                <h4 className='text-2xl font-medium mb-2'>How does the private route work?</h4>
                <p>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                </p>
            </div>
            <div className='bg-gray-300 p-5 rounded-lg mb-10'>
                <h4 className='text-2xl font-medium mb-2'>What is Node? How does Node work?</h4>
                <p>
                    Node.js is a javascript runtime used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Blog;