import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import CartItem from "./CartItem";
import "./cart.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const {
    state: { cart },
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  // console.log(cart);

  return (
    <div className="container mt-5 pt-5">
      
      <Link className="text-dark fs-5 text-start link-text" to="../allproduct">
      
        <h2 className="text text-start fs-4 my-5">  
        <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-3"/>Continue Shopping</h2>
        
      </Link>


      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="fs-6 fw-bold text-start mx-5 px-2">Image</h2>
          </div>
          <div className="col-lg-3">
            <h2 className="fs-6 fw-bold">Title</h2>
          </div>
          <div className="col-lg-3">
            <h2 className="fs-6 fw-bold ">Qty</h2>
          </div>
          <div className="col-lg-3">
            <h2 className="fs-6 fw-bold">Price</h2>
          </div>
        </div>
      </div>
      <div className="container  rounded overflow">
        <div className="row">
          <div className="col">
            {cart.map((prod) => {
              return <CartItem prod={prod} key={prod.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-3">
          <h2 className="fs-5 fw-light text-start mt-3">
            You have <span className="fs-4 fw-bold">{cart.length}</span> items
            in cart
          </h2>
        </div>
        <div className="col-lg-6">
          <div className="h2">
            <h2 className="text-end fs-5 mt-3">
              Cart Total: 
              <span className="">
              <FontAwesomeIcon
                icon={faIndianRupeeSign}
                className="fa-x mt-3 ms-2 me-1"
              />
              </span>
              <span>{total}</span>
              <Link to="../../checkout" type="button" class="btn btn-dark ms-2 text-uppercase fs-6 fw-bold">checkout</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
