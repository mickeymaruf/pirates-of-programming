import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Checkout from '../components/Checkout/Checkout';
import CourseDetails from '../components/Courses/CourseDetails';
import CourseLayout from '../components/Courses/CourseLayout';
import Courses from '../components/Courses/Courses';
import Home from '../components/Home/Home';
import Blog from '../components/Others/Blog';
import ErrorPage from '../components/Others/ErrorPage';
import Root from '../layouts/Root';
import RequireAuth from './RequireAuth';

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
                loader: () => fetch('https://pirates-of-programming-server-mickeymaruf.vercel.app/courses'),
                element: <CourseLayout />, 
                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('https://pirates-of-programming-server-mickeymaruf.vercel.app/courses'),
                        element: <Courses />
                    },
                    {
                        path: 'course/:id',
                        loader: ({ params }) => fetch(`https://pirates-of-programming-server-mickeymaruf.vercel.app/course/${params.id}`),
                        element: <CourseDetails />
                    },
                ]
            },
            {
                path: 'checkout/:id',
                loader: ({ params }) => fetch(`https://pirates-of-programming-server-mickeymaruf.vercel.app/course/${params.id}`),
                element: <RequireAuth><Checkout /></RequireAuth>
            },
            {
                path: 'blog',
                element: <Blog />
            }
        ], errorElement: <ErrorPage />
    }
])

export default routes;