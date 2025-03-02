import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from "../App.jsx";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage.jsx";

export const Routers = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <App/>,
                errorElement: <NotFoundPage/>,
                children: [
                    {
                        path: "/",
                        element: <div></div>
                    }
                ]
            }
        ]
    )

    return (
        <RouterProvider router={router}/>
    );
};
