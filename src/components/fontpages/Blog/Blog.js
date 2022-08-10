import React from "react";
import "./blog.css";
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer";

function Blog() {
  return (
    <div className="main-cont">
    <div className="container mt-5 pt-5">
      <div className="blog-text">
        <h2 className="fs-1 mt-4 fw-semibold">Our Blogs</h2>
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-12">
          <div className="card text-bg-dark ">
            <img
              src="https://images.unsplash.com/photo-1550368566-f9cc32d7392d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="img-fluid rounded shadow first "
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title text-start fs-1 mt-5 mx-2">Rings</h5>
              <p class="card-text text-light text-start fs-5 mt-2 mx-2 w-75 fw-light my-2">
                Best engagement rings are quite popular today. Everyone seems to
                have at least one to many items that include diamond rings and
                also other gems. But what makes dreams come true when searching
                for the perfect ring?
              </p>
              <Link to="../allproduct" type="button" class="btn btn-light btn-blog btn-lg my-2">Buy now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 review-cont rounded-3 ">
        <div className="row">
            <div className="col-lg-6">
                <div class="card card-bg mt-5 mb-5 mx-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://images.unsplash.com/photo-1626085664166-feb3fdb16192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="img-fluid rounded my-2" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body text-start mt-4">
                                <h5 class="card-title">Pranjit Talukdar</h5>
                                <p class="card-text">Instagram Captions For Wedding Rings- Best engagement rings are quite popular today.
                                 Everyone seems to have at least one to many items that include diamond rings and also other gems. 
                                But what makes dreams come true when searching for the perfect ring?</p>
                                <Link to="../allproduct" type="button" class="btn btn-dark btn-lg">Buy Now</Link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div class="card card-bg mb-5 mt-5 mx-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://images.unsplash.com/photo-1626085664237-c59a6c4c1bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded my-2" alt="..." />
                        </div>
                        <div class="col-md-8 ">
                            <div class="card-body text-start mt-4">
                                <h5 class="card-title">Rakib Ahmed</h5>
                                <p class="card-text">Instagram Captions For Wedding Rings- Best engagement rings are quite popular today.
                                 Everyone seems to have at least one to many items that include diamond rings and also other gems. 
                                But what makes dreams come true when searching for the perfect ring?</p>
                                <Link to="../allproduct" type="button" class="btn btn-dark btn-lg">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default Blog;
