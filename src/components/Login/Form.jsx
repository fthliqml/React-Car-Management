/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import MyCardFooter from "./MyCardFooter";

import { Input, Button, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "@contexts/AuthContext/AuthContext";

const Form = ({ onNotification }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      const resAPI = response.data;

      if (resAPI.isSuccess) {
        // const user = resAPI.data.user;
        onNotification(
          "success",
          resAPI.message,
          "You are now redirected to homepage"
        );
        localStorage.setItem("isAuthenticated", true);
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate("/products");
        }, 2000);
      }
    } catch (error) {
      console.log("Login failed:", error);
      onNotification(
        "error",
        error.response.data.status,
        error.response.data.message
      );
    }
  };

  return (
    <CardBody>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-4 md:mt-12"
      >
        <div>
          <label htmlFor="email">
            <Typography
              variant="small"
              color="blue-gray"
              className="block font-medium mb-2"
            >
              Email
            </Typography>
          </label>
          <Input
            id="email"
            color="gray"
            size="lg"
            type="email"
            name="email"
            placeholder="name@mail.com"
            className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
            labelProps={{
              className: "hidden",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            <Typography
              variant="small"
              color="blue-gray"
              className="block font-medium mb-2"
            >
              Password
            </Typography>
          </label>
          <Input
            id="password"
            color="gray"
            size="lg"
            type="password"
            name="password"
            placeholder="*****"
            className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
            labelProps={{
              className: "hidden",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" size="lg" color="gray" fullWidth>
          continue
        </Button>
        <Button
          variant="outlined"
          size="lg"
          className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
          fullWidth
        >
          <img
            src={`https://www.material-tailwind.com/logos/logo-google.png`}
            alt="google"
            className="h-6 w-6"
          />{" "}
          sign in with google
        </Button>
        <MyCardFooter />
      </form>
    </CardBody>
  );
};

export default Form;
