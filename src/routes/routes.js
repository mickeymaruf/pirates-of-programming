import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import CourseDetails from '../components/Courses/CourseDetails';
import CourseLayout from '../components/Courses/CourseLayout';
import Courses from '../components/Courses/Courses';
import Home from '../components/Home/Home';
import ErrorPage from '../components/Others/ErrorPage';
import Root from '../layouts/Root';

const routes = createBrowserRouter([
    {
        path: '/', element: <Root />, children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <CourseLayout />, 
                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('http://localhost:5000/courses'),
                        element: <Courses />
                    },
                    {
                        path: 'course/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                        element: <CourseDetails />
                    },
                ]
            },
        ], errorElement: <ErrorPage />
    }
])

export default routes;