import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import CheckOut from "../Pages/CheckOut/CheckOut";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
        
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://online-course-server-alpha.vercel.app/courses')
        },
        {
            path:'/course/:id',
            element:<CourseDetails></CourseDetails>,
            loader:({params})=>fetch(`https://online-course-server-alpha.vercel.app/courses/${params.id}`)
            
        },
        {
            path:'/checkout/:id',
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader:({params})=>fetch(`https://online-course-server-alpha.vercel.app/courses/${params.id}`)
            
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/login',
            element:<LogIn></LogIn>
        },
        {
            path:'/resetpassword',
            element:<ResetPassword></ResetPassword>
        },
        {
            path:'/terms',
            element:<TermsAndConditions></TermsAndConditions>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'*',
            element:<ErrorPage></ErrorPage>
        },
    ]
    }
])