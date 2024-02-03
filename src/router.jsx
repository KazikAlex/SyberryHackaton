import {
    Navigate,
    Outlet,
    // RouteObject,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'
// import {Home} from './pages/home/home'
import {LoginPage} from './pages/loginPage/LoginPage'
import { Home } from './pages/home/home'



const publicRoutes = [
    {
        element: <LoginPage />,
        path: '/login',
    },
]

const privateRoutes = [
    {
        element: <Home />,
        path: '/',
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
