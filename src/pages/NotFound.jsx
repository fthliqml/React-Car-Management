import { useNavigate, Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const NotFound = () => {
  const navigate = useNavigate();

  // Navigate with button (same as Link)
  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
      }}
    >
      <h1 className="text-xl font-bold">404 NOT FOUND</h1>
      <p>
        Go to home page{" "}
        <Link to={"/products"} className="text-blue-800">
          Home
        </Link>
      </p>
      <Button variant="outlined" onClick={() => handleNavigation("/products")}>
        Home
      </Button>
    </div>
  );
};

export default NotFound;
