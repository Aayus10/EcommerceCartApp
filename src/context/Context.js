import React, { createContext, useContext, useReducer, useState } from "react";
import Mobiles from "../Data";
import { cartReducer, ProductReducer } from "./Reducers";

const Cart = createContext();
const Context = ({ children }) => {
  const originaldata = useState(Mobiles);
  const data = useState(Mobiles);
  const [state, dispatch] = useReducer(cartReducer, {
    data: data,
    cart: [],
  });
  const [filterState, filterDispatch] = useReducer(ProductReducer, {
    bystock: false,
    byFastdelivery: false,
    byRating: 0,
    searchquery: "",
  });
  return (
    <Cart.Provider
      value={{ state, dispatch, filterState, filterDispatch, originaldata }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
