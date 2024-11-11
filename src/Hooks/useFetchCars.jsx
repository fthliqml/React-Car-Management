import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useFetchCars = (page) => {
  const [cars, setCars] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/cars?page=${page}`
        );
        const data = res.data;
        if (data.isSuccess) {
          const cars = data.data.cars;
          const totalData = data.data.totalData;
          setCars(cars);
          setTotalData(totalData);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);

  return { cars, totalData, loading };
};

export default useFetchCars;
