import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/cartAction";
const CartScreen = ({ location }) => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart=useSelector(state=>state.cart)
  const {cartItems} =cart
  console.log("cartItems",cartItems);
  console.log("qty", qty);
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id,qty));
    }
  }, [dispatch,id ,qty]);
  return <div>Cart Screen</div>;
};

export default CartScreen;
