import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CartState } from "../../context/Context";
import "./singleproduct.css"

function SingleRing({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="card prod-card mx-5 my-5">
      <img src={prod.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 class="card-title">{prod.title}</h5>
        <p class="card-text">{prod.description}</p>
        <p class="card-text">
          <FontAwesomeIcon icon={faIndianRupeeSign} className="fa-x me-1" />
          {prod.price}
        </p>
        {cart.some((p) => p.id === prod.id) ? (
          <button
            className="btn btn-light"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              });
            }}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="btn btn-dark"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              });
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleRing;
