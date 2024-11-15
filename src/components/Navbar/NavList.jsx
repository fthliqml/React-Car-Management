/* eslint-disable react/prop-types */
import { Typography, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import axios from "axios";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Cart from "./Cart";

const NavList = ({ active }) => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/v1/auth/logout", {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/products"
          className={`flex items-center hover:text-blue-500 transition-colors ${
            active === "products" ? "text-blue-600" : undefined
          }`}
        >
          Products
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/about"
          className={`flex items-center hover:text-blue-500 transition-colors ${
            active === "about" ? "text-blue-600" : undefined
          }`}
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/services"
          className={`flex items-center hover:text-blue-500 transition-colors ${
            active === "services" ? "text-blue-600" : undefined
          }`}
        >
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/feedback"
          className={`flex items-center hover:text-blue-500 transition-colors ${
            active === "feedback" ? "text-blue-600" : undefined
          }`}
        >
          Feedback
        </Link>
      </Typography>
      <Cart />
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Button color="cyan" onClick={handleLogout}>
          Logout
        </Button>
      </Typography>
    </ul>
  );
};

export default NavList;
