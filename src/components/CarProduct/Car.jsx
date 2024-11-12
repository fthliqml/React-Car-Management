/* eslint-disable react/prop-types */

import { Button } from "@material-tailwind/react";

const Car = ({ car }) => {
  const date = new Date(car.createdAt).toLocaleString("id-ID");

  return (
    <div className="max-w-sm lg:max-w-md m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src="/images/car08.min.jpg" alt="car" />

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
        <Button variant="gradient" color="cyan" fullWidth>
          Read more
        </Button>
      </div>
    </div>
  );
};

export default Car;
