import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "@pages/Login";
import About from "@pages/About";
import NotFound from "@pages/NotFound";
import CarProduct from "@pages/CarProduct";
import Feedback from "@pages/Feedback";
import { AuthProvider } from "@contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <AuthProvider>
        <About />
      </AuthProvider>
    ),
  },
  {
    path: "/products",
    element: (
      <AuthProvider>
        <CarProduct />
      </AuthProvider>
    ),
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
