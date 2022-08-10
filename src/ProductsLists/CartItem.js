import React from "react";
import { CartState } from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

function CartItem({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="container bg-light rounded shadow my-3 mx-1">
      <div className="row">
        <div className="col-lg-3">
          <div className="card bg-light my-5 mx-4 ">
            <img src={prod.image} class="card-img-top w-100 rounded
            "alt="..." />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card-body mt-5 pt-4">
            <h2 className="fs-6 fw-bold">{prod.title}</h2>
            <h2 className="fs-6 fw-light">{prod.description}</h2>
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
            >
              Remove from cart <FontAwesomeIcon icon={faTrash} className="fa-1x mx-1" />
            </button>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card-body w-25 mx-auto ps-2 my-5 pt-5 ">
            <select class="form-select" aria-label="Default select example" as="select" value={prod.qty} 
              onChange={(e)=> {
                dispatch({
                  type:"CHANGE_CART_QTY",
                  payload: {
                    id: prod.id,
                    qty: e.target.value
                  }
                })
              }}
            >
              {[...Array(prod.inStock).keys()].map((x) => (
                <option key={ x + 1}>{ x + 1}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-lg-3">
          <h2 className="fs-5 mx-auto ps-2 my-5 pt-5">
            <FontAwesomeIcon icon={faIndianRupeeSign} className="fa-xs mx-1" />
            {prod.price}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
