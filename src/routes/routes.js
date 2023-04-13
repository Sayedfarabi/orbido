import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/home/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "",
                element: ""
            },
            {
                path: "",
                element: ""
            },
            {
                path: "",
                element: ""
            }
        ]
    }
])