import React from 'react'
import { CartState } from '../../context/Context'
import SingleProduct from './SingleProduct'
import Filter from './Filter'
import Footer from '../../components/fontpages/Footer/Footer'
//import "./allproduct.css"

function AllProduct() {

  const {state: {product}, productState: {sort} } = CartState()
  
  const transfornProduct = () => {
    let sortedProduct = product;

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) => 
        sort === "lowToHeigh" ? a.price-b.price : b.price - a.price
      );
    }
    return sortedProduct
  }

  return (
    <div className="main-container">
   <div className="container mt-5 pt-4">
    <div className="text my-5">
      <h2>Our Products</h2>
    </div>
    <div className="row">
      <div className="filter-container rounded sticky-top  bg-light col-lg-2 col-sm-2">
          <Filter />
      </div>
      <div className="col-lg-10 main-col">
        <div className="items-container">
        {transfornProduct().map((prod) => {
          return (
            <SingleProduct prod={prod} key={prod.id} />
          )
        })}
        </div>
      </div>
    </div>
   </div>
   <Footer/>
   </div>
  )
}

export default AllProduct