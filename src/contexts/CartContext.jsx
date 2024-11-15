/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [carInCart, setCarInCart] = useState([]);

  return (
    <CartContext.Provider
      value={{ cartCount, setCartCount, carInCart, setCarInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
