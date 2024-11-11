import { Card } from "@material-tailwind/react";
import MyCardHeader from "./components/MyCardHeader";
import Form from "./components/Form";

const Login = () => {
  return (
    <Card
      shadow={false}
      className="md:px-24 md:py-14 py-8 border border-gray-300 h-[100vh] justify-center"
    >
      <MyCardHeader />
      <Form />
    </Card>
  );
};

export default Login;
