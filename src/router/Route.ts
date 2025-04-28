import { createBrowserRouter } from "react-router";
import HomePage from '../pages/homepage';
import Login from "../pages/login";
import Register from "../pages/register";
import JobPage from "../pages/jobpage";
import Profile from "../pages/profile";
import Jobdetails from "../pages/jobdetails";

export const routes = createBrowserRouter([
    { 
        path: "/",
        Component: HomePage,
    },{
        path:"/login",
        Component: Login,
    },
    {
        path: "/register",
        Component: Register,
    },
    {
        path:"/job",
        Component:JobPage
    },
    {
        path:"/job/:id",
        Component:Jobdetails
    },
    {
        path:"/profile/:id",
        Component:Profile
    }

  
]);

