/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavList = ({ active }) => {
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
          to="#"
          className={`flex items-center hover:text-blue-500 transition-colors ${
            active === "contact" ? "text-blue-600" : undefined
          }`}
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );
};

export default NavList;