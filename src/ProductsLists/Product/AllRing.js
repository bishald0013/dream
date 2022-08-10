import React from 'react'
import { CartState } from '../../context/Context'
import Filter from './Filter'
import "./allproduct.css"
import SingleRing from './SingleRing'
import Footer from '../../components/fontpages/Footer/Footer'


function AllRing() {

    const {state: {ringList}, productState: {sort}} = CartState()

    const transformProduct = () => {
       let setProduct = ringList;
        setProduct = setProduct.sort((a, b) => 
            sort === "lowToHeigh" ? a.price-b.price : b.price-a.price
        )
        return setProduct
    }
    
  return (
    <div className="main-container">
    <div className='container mt-5 pt-4'>
        <div className="text my-5">
            <h2>Rings</h2>
        </div>
        <div className="row">
            <div className="filter-container rounded sticky-top bg-light col-lg-2">
                <Filter/>
            </div>
            <div className="col-lg-10">
                <div className="items-container">
                {transformProduct().map((prod) => {
                    return (
                        <SingleRing prod={prod} key={prod.id} />
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

export default AllRing