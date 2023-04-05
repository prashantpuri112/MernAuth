import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Impprt all components
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import Username from './components/Username';




/* Root routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username>Root Route</Username>
    },
    {
        path: '/register',
        element: <Register>Register Route</Register>
    },
    {
        path: '/reset',
        element: <Reset>Login Route</Reset>
    },
    {
        path: '/recovery',
        element: <Recovery>Home Route</Recovery>
    },
    {
        path: '/profile',
        element: <Profile>Profile Route</Profile>
    },
    {
        path: '*', // 404 Invalid Page
        element: <PageNotFound>Page Not Found</PageNotFound>
    },
    {
        path: '/Password',
        element: <Password>Password Route</Password>
    },

])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main >
    )
}