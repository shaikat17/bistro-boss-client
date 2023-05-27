import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../components/CommonLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";

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
    {
      path: "/our-menu",
      element: <CommonLayout />,
      children: [
        {
          path: "/our-menu",
          element: <OurMenu />
        }
      ]
    }
  ]);