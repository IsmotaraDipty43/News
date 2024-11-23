import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeLayouts from "../Layouts/HomeLayouts";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([

    {
        path:'/',
    element:<HomeLayouts></HomeLayouts>,
    children: [
        {
            path: '/',
            element: <Navigate to={'/category/01'}></Navigate>
        },
        {
            path: '/category/:id',
            element: <CategoryNews></CategoryNews>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
    ]
    },
    {
        path:'/news/:id',
    element:<PrivateRoutes><NewsDetails></NewsDetails>,</PrivateRoutes>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:'/auth',
    element:<AuthLayouts></AuthLayouts>,
    children:[
       {
        path:'/auth/login',
        element: <Login></Login>
       },
       {
        path:'/auth/register',
        element: <Register></Register>
       }
    ]
    },
    {
        path:'*',
    element:<h1>error</h1>
    }

])

export default router;