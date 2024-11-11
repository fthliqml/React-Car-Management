import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "@pages/About/About";
import NotFound from "@pages/NotFound/NotFound";
import CarProduct from "@pages/CarProduct/CarProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CarProduct />,
    errorElement: <NotFound />,
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
