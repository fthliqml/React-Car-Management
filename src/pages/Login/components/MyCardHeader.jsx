import { CardHeader, Typography } from "@material-tailwind/react";

const MyCardHeader = () => {
  return (
    <CardHeader shadow={false} floated={false} className="text-center">
      <Typography
        variant="h1"
        color="blue-gray"
        className="mb-4 !text-3xl lg:text-4xl"
      >
        Car Shop 🚗
      </Typography>
    </CardHeader>
  );
};

export default MyCardHeader;
