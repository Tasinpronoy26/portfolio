import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Moreinfo from "../Components/Moreinfo/Moreinfo";
import Body from "../Components/Body/Body";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Body></Body>
            }

        ]

    },
    {
        path: '/moreinfo',
        element: <Moreinfo></Moreinfo>
    }


]);

export default router; 