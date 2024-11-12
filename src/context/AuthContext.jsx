/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
