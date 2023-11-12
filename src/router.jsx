import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./pages/home";
import Search, { weatherLoader } from "./pages/search";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                element: <Search />,
                path: "search/:q",
                loader: weatherLoader
            }
        ]
    },
])

export default router;