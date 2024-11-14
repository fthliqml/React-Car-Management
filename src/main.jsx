import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "@contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </ThemeProvider>
  </StrictMode>
);
