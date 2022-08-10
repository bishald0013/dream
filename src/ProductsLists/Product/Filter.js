import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";
import product from "../Product";
// import { useNavigate } from "react-router-dom";
import "./filter.css";

function Filter() {
  const {
    productState: { sort },
    productDispatch,
  } = CartState();

  console.log(sort);

  return (
    <div className="container my-1 mt-5 pt-5">
      <h2 className="text fs-6 my-4">Filter</h2>
      <div className="row">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHeigh",
              })
            }
            checked={sort === "lowToHeigh" ? true : false}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Low To Heigh
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={() => 
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "heighToLow"
            })
          }
          checked={sort === "heighToLow" ? true: false}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Heigh To Low
          </label>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-12 bg-light shadow rounded my-2">
          <Link to="../allproduct" className="link-text">
            <h2 className="fs-6 my-2 text-dark">All products</h2>
          </Link>
        </div>
        <div className="col-lg-12 bg-light shadow rounded my-2">
          <Link to="../dream" className="link-text">
            <h2 className="fs-6 my-2 text-dark">Dream Cature</h2>
          </Link>
        </div>
        <div className="col-lg-12 bg-light shadow rounded my-2">
          <Link to="../allring" className="link-text">
            <h2 className="fs-6 my-2 text-dark">Rings</h2>
          </Link>
        </div>
        <div className="col-lg-12 bg-dark shadow rounded my-2">
          <Link to="../cart" className="link-text">
            <h2 className="fs-6 my-2 text-light">Go to cart</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Filter;
