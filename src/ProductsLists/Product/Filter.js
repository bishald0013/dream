import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";

import { BsFilterLeft } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import "./filter.css";

function Filter() {
  const {
    productState: { sort },
    productDispatch,
  } = CartState();

  console.log(sort);

  return (
    <div className="drop">
      <div class="dropstart me-3">
        <button
          class="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsFilterLeft size={30} />
        </button>
        <ul class="dropdown-menu shadow">
          <div class="form-check mx-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={() => {
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHeigh",
                });
              }}
              checked={sort === "lowToHeigh" ? true : false}
            />
            <label class="form-check-label" for="flexCheckDefault">
              Price Low to heigh
            </label>
          </div>
          <div class="form-check mx-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onChange={() => {
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "heighToLow",
                });
              }}
              checked={sort === "heighToLow" ? true : false}
            />

            <label class="form-check-label" for="flexCheckDefault1">
              Price Heigh to Low
            </label>
          </div>
          <ul class="list-group my-4 mx-3">
            <Link to="../allproduct" class="list-group-item list-group-item-info">
              All products
            </Link>
            <Link to="../dream" class="list-group-item list-group-item-warning">
              Dream Catures
            </Link>
            <Link to="../allring" class="list-group-item list-group-item-danger">
              Rings
            </Link>
            <Link to="../cart" class="btn btn-group-item list-group-item-danger my-3">
              Go to cart
            </Link>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
