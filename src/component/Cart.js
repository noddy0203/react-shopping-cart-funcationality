import React, { createContext, useReducer } from "react";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

export const creatingContextForCart = createContext(products);

const initialState = {
  item: products,
  totalItem: 0,
  totalAmount: 0,
};
const Cart = () => {
  // const [item , setItem] = useState(products)
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the particular items from cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };


  //to clear the entire cart
  const clearCart = () =>{
    return dispatch({
      type: "CLEAR_CART"
    })
  }

  return (
    <>
      <creatingContextForCart.Provider
        value={{ ...state, removeItem, clearCart }}
      >
        <ContextCart />
      </creatingContextForCart.Provider>
    </>
  );
};

export default Cart;
