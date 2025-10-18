import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Layout from "../components/Layout/Layout";
import Board from "../pages/Board/Board";
import MyMessages from "../pages/MyMessages/MyMessages";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import Logout from "../pages/Logout/Logout";

export const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
    path: "/logout",
    element: <Logout />
    },
    { 
        path: "/",
        element:<Layout />,
        children: [
            {
                index:true, 
                element: <Board />
            }, 
            {
                path: "my-messages", 
                element: (<AuthGuard>
                 <MyMessages/>
                 </AuthGuard>
                 ),
            },
        ],
    },
],)