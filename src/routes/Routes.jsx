import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../components/CommonLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home />
        }
      ]
    },
  ]);