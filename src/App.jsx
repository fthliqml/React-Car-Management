import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "@pages/Login/Login";
import About from "@pages/About/About";
import NotFound from "@pages/NotFound/NotFound";
import CarProduct from "@pages/CarProduct/CarProduct";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
