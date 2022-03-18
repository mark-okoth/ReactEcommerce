import { createContext, useState } from "react";

const CartContext = createContext();

export function Cartprovider({ children }) {
  const [item, setItem] = useState([]);
  const addtoCart = (name, price) => {
    setItem((prev) => [...prev, { name, price }])

  }
  return (
    <CartContext.Provider value={{ item, addtoCart}}>{children}</CartContext.Provider>
  );
}

export default CartContext;
