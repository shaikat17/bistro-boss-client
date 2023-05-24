import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "../components/CommonLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayout />,
    },
  ]);