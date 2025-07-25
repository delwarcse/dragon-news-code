import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import MainContent from "../components/layout-components/MainContent";



const router=createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"/category/01"}></Navigate>
            },
            {
                path:"/category/:id",
                element:<MainContent></MainContent>,
                loader:({params})=>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                
            }
        ]
    },
    {
        path:"/news",
        element:<h1>News Layout</h1>,
    },
    {
        path:"/auth",
        element:<h1>Login</h1>,
    },
    {
        path:"*",
        element:<h1 className="text-2xl text-center font-bold mt-28">No Page Link Added <br /> <br /> So That Error Occurred</h1>,
    },
])

export default router; 