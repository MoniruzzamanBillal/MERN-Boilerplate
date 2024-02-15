import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages:
import Error from "./pages/Error";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

// router:
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
