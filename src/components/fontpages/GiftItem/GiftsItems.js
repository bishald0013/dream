import React from "react";
import {Link} from "react-router-dom"
import "./giftsitem.css";
import Item from "../images/item1.png";
import Item2 from "../images/item 2.png";
import Item3 from "../images/item 3.png";
import Item4 from "../images/item 4.png";

export default function GiftsItems() {
  return (
    <div className="container rounded-3 main-container">
      <h2 className="text-center mt-5 pt-5 pb-4">Gifts Items.</h2>
      <div className="row mt-4 mx-4">
        <div className="col-lg-3">
          <div className="card mt-5">
            <img className="card-img-top w-50 mx-auto" src={Item} alt="" />
            <div className="card-body">
              <p className="card-title">
                A pearl’s first love will always be her oyster.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mt-5">
            <img className="card-img-top w-50 mx-auto" src={Item2} alt="" />
            <div className="card-body">
              <p className="card-title">
                A pearl’s first love will always be her oyster.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mt-5">
            <img className="card-img-top w-50 mx-auto" src={Item3} alt="" />
            <div className="card-body">
              <p className="card-title pt-3">
                A pearl’s first love will always be her oyster.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mt-5">
            <img className="card-img-top pt-4 mx-auto" src={Item4} alt="" />
            <div className="card-body">
              <p className="card-title pt-5">
                A pearl’s first love will always be her oyster.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mt-5">
            <img className="card-img-top w-50 mx-auto" src={Item3} alt="" />
            <div className="card-body">
              <p className="card-title pt-3">
                A pearl’s first love will always be her oyster.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mt-5">
            <img className="card-img-top w-50 mx-auto" src={Item} alt="" />
            <div className="card-body">
              <p className="card-title">
                A pearl’s first love will always be her oyster.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mt-5">
            <img className="card-img-top pt-4 mx-auto" src={Item4} alt="" />
            <div className="card-body">
              <p className="card-title pt-5">
                A pearl’s first love will always be her oyster.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mt-5">
            <img className="card-img-top w-50 mx-auto" src={Item2} alt="" />
            <div className="card-body">
              <p className="card-title">
                A pearl’s first love will always be her oyster.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="button mb-5 my-5 ">
        <Link to="allproduct" type="button" class="btn btn-dark btn-lg my-3 ">
          View All
        </Link>
      </div>
    </div>
  );
}
