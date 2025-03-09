import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from "../App.jsx";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage.jsx";
import {LoginPage} from "../pages/LoginPage/LoginPage.index.jsx";
import {RecoveryPasswordPage} from "../pages/RecoveryPasswordPage/RecoveryPasswordPage.index.jsx";
import {CreatePasswordPage} from "../pages/CreatePasswordPage/CreatePasswordPage.index.jsx";
import {RegisterUserUserPage} from "../pages/RegisterUserPage/RegisterUserPage.index.jsx";
import {HomePage} from "../pages/HomePage/HomePage.index.jsx";
import {DocumentsPage} from "../pages/DocumentsPage/DocumentsPage.index.jsx";
import {DocumentChatPage} from "../pages/DocumentChatPage/DocumentChatPage.index.jsx";

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
                        element: <LoginPage/>
                    },
                    {
                        path: "/register",
                        element: <RegisterUserUserPage/>
                    },
                    {
                        path: "/reset-password",
                        element: <RecoveryPasswordPage/>
                    },
                    {
                        path: "/create-password",
                        element: <CreatePasswordPage/>
                    },
                    {
                        path: "/home",
                        element: <HomePage/>
                    },
                    {
                        path: "/documents",
                        element: <DocumentsPage/>
                    },
                    {
                        path: "/documents/chat",
                        element: <DocumentChatPage/>
                    }

                ]
            }
        ]
    )

    return (
        <RouterProvider router={router}/>
    );
};
