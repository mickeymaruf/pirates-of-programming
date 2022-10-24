import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
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
        ], errorElement: <ErrorPage />
    }
])

export default routes;