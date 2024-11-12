/* eslint-disable react/prop-types */
import Car from "./Car";

const CarList = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-y-10 justify-items-center">
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
