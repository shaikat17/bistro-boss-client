import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../components/CommonLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OrderFood from "../pages/OrderFood";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/order-food",
        element: <OrderFood />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      }
    ],
  },
  
]);
