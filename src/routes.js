import { createBrowserRouter } from "react-router-dom";

import {Home} from './components/Home/Home';
import { SignIn } from "./components/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <SignIn />
    },
    {
        path:"/home",
        element: <Home />
    }
]);