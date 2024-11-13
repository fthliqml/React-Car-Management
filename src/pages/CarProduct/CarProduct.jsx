import MyNavbar from "@components/Navbar/MyNavbar";
import NavList from "@components/Navbar/NavList";
import LoadingIcon from "@components/LoadingIcon";
import { useContext, useState } from "react";
// import Cookies from "js-cookie";
// console.log(Cookies.get("accessToken")); not http only

import CarList from "@components/CarProduct/CarList";
import Pagination from "@components/CarProduct/Pagination";
import useFetchCars from "@hooks/useFetchCars";
import AuthContext from "@contexts/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

function CarProduct() {
  const [page, setPage] = useState(1);
  const { cars, loading, totalData } = useFetchCars(page);

  // const { isAuthenticated } = useContext(AuthContext);
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  const totalPages = Math.ceil(totalData / 12);

  return (
    <>
      <MyNavbar>
        <NavList active={"products"} />
      </MyNavbar>
      {!cars.length || loading ? (
        <div className="h-[100vh] flex items-center">
          {loading ? (
            <LoadingIcon />
          ) : (
            <p className="mx-auto font-semibold text-xl text-black">
              No products available. Please comeback soon...
            </p>
          )}
        </div>
      ) : (
        <>
          <CarList cars={cars} />
          <Pagination page={page} onSetPage={setPage} totalPages={totalPages} />
        </>
      )}
    </>
  );
}

export default CarProduct;
