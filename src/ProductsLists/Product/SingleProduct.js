import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CartState } from "../../context/Context";
import "./singleproduct.css";

function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    
    <div class="card prod-card mx-5 my-5">
      <img src={prod.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{prod.title}</h5>
        <p class="card-text">{prod.description}</p>
        <p class="card-text"><FontAwesomeIcon
                icon={faIndianRupeeSign}
                className="fa-x me-1"
              />{prod.price}</p>

        {cart.some((p) => p.id === prod.id) ? (
          <button
            
            class="btn btn-light"
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
            
            class="btn btn-dark"
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

export default SingleProduct;
