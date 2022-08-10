import React from 'react'
import './blogs.css'
import {Link} from "react-router-dom"


function Blogs() {
  return (
    <div className="container my-5 review-cont rounded-3 ">
        <div className="title mb-5">
            <h2 className='text-center mt-5 pt-5 pb-4'>Blogs</h2>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div class="card card-bg mt-5 mb-5 mx-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://images.unsplash.com/photo-1626085664166-feb3fdb16192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="img-fluid rounded" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body text-start mt-4">
                                <h5 class="card-title">Pranjit Talukdar</h5>
                                <p class="card-text">Instagram Captions For Wedding Rings- Best engagement rings are quite popular today.
                                 Everyone seems to have at least one to many items that include diamond rings and also other gems. 
                                But what makes dreams come true when searching for the perfect ring?</p>
                                <Link to="blog" type="button" class="btn btn-dark btn-lg">Read Our Blogs</Link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div class="card card-bg mb-5 mt-5 mx-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://images.unsplash.com/photo-1626085664237-c59a6c4c1bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded" alt="..." />
                        </div>
                        <div class="col-md-8 ">
                            <div class="card-body text-start mt-4">
                                <h5 class="card-title">Rakib Ahmed</h5>
                                <p class="card-text">Instagram Captions For Wedding Rings- Best engagement rings are quite popular today.
                                 Everyone seems to have at least one to many items that include diamond rings and also other gems. 
                                But what makes dreams come true when searching for the perfect ring?</p>
                                <Link to="blog" type="button" class="btn btn-dark btn-lg">Read Our Blogs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs