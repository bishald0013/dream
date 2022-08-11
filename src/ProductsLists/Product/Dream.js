import React from 'react'
import { CartState } from '../../context/Context'
import Filter from './Filter'
import SingleDreamCature from './SingleDreamCature'
import "./allproduct.css"
import Footer from '../../components/fontpages/Footer/Footer'

function Dream() {
    const {state: {dreamCature}, productState: {sort}} = CartState()
    
    const transformProduct = () => {

      let sortedProduct = dreamCature;

      if(sort) {
        sortedProduct = sortedProduct.sort((a,b) => 
        sort === "lowToHeigh" ? a.price-b.price : b.price-a.price 
        )
      }
      return sortedProduct
    }
  return (
    <div className="main-container">
    <div className="container mt-5 pt-4">
        <div className="row my-5">
            <div className="col-lg-2 ">
              <Filter />
            </div>
          <div className="col-lg-10 mx-auto">
            <h2 className="text-center">Dream Catures</h2>
          </div>
        </div>
      <div className="row">
        <div className="col-lg-12 d-flex flex-wrap items-container my-3">
          {transformProduct().map((prod) => {
            return <SingleDreamCature prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Dream