import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../components/CommonLayout";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout />,
      errorElement: <ErrorPage />
    },
  ]);