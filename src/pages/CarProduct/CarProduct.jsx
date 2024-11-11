import MyNavbar from "@components/Navbar/MyNavbar";
import NavList from "@components/Navbar/NavList";
import LoadingIcon from "@components/LoadingIcon";
import { useState } from "react";

import CarList from "./CarList";
import Pagination from "./Pagination";
import useFetchCars from "../../Hooks/useFetchCars";

function CarProduct() {
  const [page, setPage] = useState(1);
  const { cars, loading, totalData } = useFetchCars(page);

  const totalPages = Math.ceil(totalData / 12);

  return (
    <>
      <MyNavbar>
        <NavList active={"products"} />
      </MyNavbar>
      {!cars.length || loading ? (
        <div className="h-96 flex items-center">
          {loading ? (
            <LoadingIcon />
          ) : (
            <p className="mx-auto font-semibold text-xl text-black">
              Products is empty. Please comeback soon...
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
