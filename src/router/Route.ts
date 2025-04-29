import { createBrowserRouter } from "react-router";
import HomePage from '../pages/homepage';
import Login from "../pages/login";
import Register from "../pages/register";
import JobPage from "../pages/jobpage";
import Profile from "../pages/profile";
import Jobdetails from "../pages/jobdetails";
import Gensokyo from "../pages/gensokyo";
import NotFound from "../pages/notfound";
import LandingPage from "../pages/landingpage";

export const routes = createBrowserRouter([
    {
        path:"/gensokyo",
        Component: Gensokyo,
        children:[
            {
                index:true,
                Component: HomePage,
            },
            {
                path:"job",
                Component:JobPage
            },
            {
                path:"job/:id",
                Component:Jobdetails
            },
            {
                path:"profile/:id",
                Component:Profile
            }
        ]
    },
    { 
       
    },
    {
        index:true,
        Component: LandingPage,
    },
    {
        path:"/login",
        Component: Login,
    },
    {
        path: "/register",
        Component: Register,
    },
    {
        path:'/404',
        Component:NotFound
    }

  
]);

