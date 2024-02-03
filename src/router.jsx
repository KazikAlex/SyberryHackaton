import {
    Navigate,
    Outlet,
    // RouteObject,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
// import {Home} from './pages/home/home'
import {LoginPage} from './pages/loginPage/LoginPage'
import FilmPage from './pages/filmPage/filmPage'

import UserPage from './pages/UserPage/UserPage';
import Main from './pages/Main/main';


const publicRoutes = [
    {
        element: <LoginPage />,
        path: '/login',
    },
    {
        element: <UserPage />,
        path: '/user-page'
    }
]

const privateRoutes = [
    {
        element: <Main />,
        path: '/',
    },
    {
        element: <FilmPage />,
        path: `/film/:id`,
    },
]


const router = createBrowserRouter([
    {
        children: privateRoutes,
        element: <PrivateRoutes />,
    },
    ...publicRoutes,
])

export const Router = () => {
    return <RouterProvider router={router} />
}

function PrivateRoutes() {
    const isAuthenticated = true

    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
