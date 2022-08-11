import React from "react";
import { CartState } from "../../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";
import Footer from "../../components/fontpages/Footer/Footer";


//import "./allproduct.css"

function AllProduct() {
  const {
    state: { product },
    productState: { sort },
  } = CartState();

  const transfornProduct = () => {
    let sortedProduct = product;

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === "lowToHeigh" ? a.price - b.price : b.price - a.price
      );
    }
    return sortedProduct;
  };

  return (
    <div className="main-container">
      <div className="container mt-5 pt-4">
          <div className="row my-5">
              <div className="col-lg-2 ">
                <Filter />
              </div>
            <div className="col-lg-10 mx-auto">
              <h2 className="text-center">Our Products</h2>
            </div>
          </div>
        <div className="row">
          <div className="col-lg-12 d-flex flex-wrap items-container my-3">
            {transfornProduct().map((prod) => {
              return <SingleProduct prod={prod} key={prod.id} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProduct;
