import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useReducer } from "react";

const initialState = {
  formData: {
    name: "",
    email: "",
    message: "",
  },
  isSubmitting: false,
  errors: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "SUBMIT_START":
      return {
        ...state,
        isSubmitting: true,
      };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({ type: "UPDATE_FIELD", field: name, value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "SUBMIT_START" });
  }

  return (
    <div className="min-h-screen my-5">
      <Card shadow={false} color="transparent">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg sm:w-96 lg:w-[40rem] border border-blue-gray-900 p-7 rounded shadow"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="Muhammad Fatihul Iqmal"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              name="name"
              onChange={(e) => handleChange(e)}
              value={state.formData.name}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              value={state.formData.email}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Message
            </Typography>
            <Textarea
              size="lg"
              name="message"
              onChange={(e) => handleChange(e)}
              value={state.formData.message}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Submit
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Form;
