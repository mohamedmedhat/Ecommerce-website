import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/signin',
        element: <Signin/>,
    },
    {
        path: '/signup',
        element: <SignUp/>,
    },
])