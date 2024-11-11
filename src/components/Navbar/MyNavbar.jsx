/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import NavList from "./NavList";

export default function MyNavbar({ children }) {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-[100%] rounded-none px-6 py-3 border-b-2 border-cyan-900 border-t-0 border-x-0">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="logo-ct"
          className="w-10"
        />
        <div className="hidden lg:block">{children}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
