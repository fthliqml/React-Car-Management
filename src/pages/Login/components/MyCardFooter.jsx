import { Typography } from "@material-tailwind/react";

const MyCardFooter = () => {
  return (
    <Typography
      variant="small"
      className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
    >
      Upon signing in, you consent to abide by our{" "}
      <a href="#" className="text-gray-900">
        Terms of Service
      </a>{" "}
      &{" "}
      <a href="#" className="text-gray-900">
        Privacy Policy.
      </a>
    </Typography>
  );
};

export default MyCardFooter;
