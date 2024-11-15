/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";
import { useCart } from "@contexts/CartContext";
import { useEffect, useState } from "react";

const Car = ({ car }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { setCartCount, carInCart, setCarInCart } = useCart();
  const date = new Date(car.createdAt).toLocaleString("id-ID");

  useEffect(() => {
    carInCart.includes(car.id)
      ? setIsAddedToCart(true)
      : setIsAddedToCart(false);
  }, [carInCart, car.id]);

  function handleCart() {
    setCartCount((prev) => (isAddedToCart ? prev - 1 : prev + 1));
    setCarInCart((prevArr) =>
      isAddedToCart
        ? prevArr.filter((num) => num !== car.id)
        : [...prevArr, car.id]
    );
    setIsAddedToCart((prev) => !prev);
  }

  return (
    <div className="max-w-sm lg:max-w-md m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg h-96 w-full object-cover"
        src={car.image}
        alt="car"
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {car.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <ul className="mb-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-400">
          <li>
            <span className="font-semibold">Name:</span> {car.name}
          </li>
          <li>
            <span className="font-semibold">Model:</span> {car.model}
          </li>
          <li>
            <span className="font-semibold">Size:</span> {car.size}
          </li>
          <li>
            <span className="font-semibold">Created:</span> {date}
          </li>
        </ul>
        <Button
          variant="gradient"
          color={isAddedToCart ? "red" : "cyan"}
          fullWidth
          onClick={handleCart}
        >
          {isAddedToCart ? "Cancel add" : "Add to cart"}
        </Button>
      </div>
    </div>
  );
};

export default Car;
