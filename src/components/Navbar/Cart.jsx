import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import { useCart } from "@contexts/CartContext";

const Cart = () => {
  const { cartCount } = useCart();
  return (
    <Typography
      as="li"
      variant="h6"
      color="blue-gray"
      className="p-1 font-medium flex"
    >
      <ShoppingCartIcon className="w-7" />
      <span className="pb-3">{cartCount}</span>
    </Typography>
  );
};

export default Cart;
