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
    <div className="text my-5">
      <h2>Dream Cature</h2>
    </div>
    <div className="row">
      <div className="filter-container rounded sticky-top bg-light col-lg-2">
          <Filter />
      </div>
      <div className="col-lg-10">
        <div className="items-container">
        {transformProduct().map((prod) => {
          return (
            <SingleDreamCature prod={prod} key={prod.id} />
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

export default Dream