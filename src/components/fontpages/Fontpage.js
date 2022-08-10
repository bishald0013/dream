import React from "react";
import GiftsItems from "./GiftItem/GiftsItems";
import "./fontpage.css";
//import Hero from '../fontpages/hero.png'
import Slide from "../fontpages/images/slide 2.png";
import Slide2 from "../fontpages/images/slide 3.png";
import Slide3 from "../fontpages/images/slide 4.png";
import Reviews from "./Reviews/Blogs";
import AboutUs from "./AboutUS/AboutUs";
import Footer from "./Footer/Footer";
import { useUserAuth } from "../../UserAuthContext";
import { Link } from "react-router-dom";

function Fontpage() {
  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="cont">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active " data-bs-interval="10000">
            <img src={Slide3} class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block text-start">
              <h1>
                Welcome To <br></br> Dream Cature Studio
              </h1>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              {user ? (
                <button
                  onClick={handleLogOut}
                  type="button"
                  class="btn btn-light btn-lg me-3"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to="signeup" type="button" class="btn btn-light btn-lg me-3">
                    Sign Up
                  </Link>
                  <Link to="login" type="button" class="btn btn-outline-light btn-lg">
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <img src={Slide2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-start">
              <h1>Chains</h1>
              <p>
                Costume jewelry is not made to give women an aura of wealth,
                <br></br>but to make them beautiful
              </p>
              <Link to="allproduct" type="button" class="btn btn-light btn-lg me-3">
                
                Buy Now
              </Link>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <img src={Slide} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-start">
              <h1>Rings</h1>
              <p>
                Just because you can’t wear your ring all day show it off.{" "}
                <br></br> It’s made from durable aluminum. At least I think so I
                haven’t taken it off since the day I got it!..
              </p>
              <Link to="allring" type="button" class="btn btn-light btn-lg me-3">
                
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <GiftsItems />
      <hr className="hr"/>
      <Reviews />
      <hr />
      <AboutUs />
      <hr />
      <div className="divider">
        <Footer />
      </div>
    </div>
  );
}

export default Fontpage;
