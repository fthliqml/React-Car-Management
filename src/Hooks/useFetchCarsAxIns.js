import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import apiInstance from "../api/apiInstance";

const useFetchCars = (limit, offset) => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [cars, setCars] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        // with axios instance
        const res = await apiInstance.get(
          `/cars?limit=${limit}&offset=${offset}`,
          { withCredentials: true }
        );

        const data = res.data;
        if (data.isSuccess) {
          const cars = data.data.cars;
          const totalData = data.data.totalData;
          setCars(cars);
          setTotalData(totalData);
        }
      } catch (err) {
        if (err.status === 401) {
          localStorage.removeItem("isAuthenticated");
          setIsAuthenticated(false);
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
    // Auto scroll to top page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [limit, offset, setIsAuthenticated, navigate]);

  return { cars, totalData, loading };
};

export default useFetchCars;
