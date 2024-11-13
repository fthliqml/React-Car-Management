import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "@pages/Login";
import About from "@pages/About";
import NotFound from "@pages/NotFound";
import CarProduct from "@pages/CarProduct";
import Feedback from "@pages/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <CarProduct />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
