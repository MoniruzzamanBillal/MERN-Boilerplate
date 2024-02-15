import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import Error from "../pages/Error";
import RootPage from "./RootPage";

export const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },

  {
    path: "/*",
    element: <Error />,
  },
]);
