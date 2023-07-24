import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../components/ErrorPage";
import LogWithEmailAndPass from "../pages/Login/LogWithEmailAndPass";
import Register from "../pages/Register/Register";
import Collages from "../pages/Collages/Collages";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LogWithEmailAndPass /> },
      { path: "/register", element: <Register /> },
      { path: "/collages", element: <Collages /> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
]);

export default router;
