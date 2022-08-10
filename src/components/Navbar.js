import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";
import { useUserAuth } from "../UserAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import { CartState } from "../context/Context";

function Navbar() {
  const {
    state: { cart },
  } = CartState();

  const { user, logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(user)

  return (
    <header class="p-3 bg-dark fixed-top shadow">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"></a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" class="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
            </li>
            <li>
              <Link to="blog" class="nav-link px-2 text-white">
                Blogs
              </Link>
            </li>
            <li class="nav-item dropdown ">
              <a
                class="nav-link dropdown-toggle text-white "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="allproduct">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="dream">
                    Dream Catures
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="allring">
                    Rings
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

       
          {user ? (
            <div class="text-end mx-2">
              <button
                onClick={handleLogOut}
                type="button"
                class="btn btn-warning"
              >
                Sign-out
              </button>
            </div>
          ) : (
            <div class="text-end">
              <Link to="login" type="button" class="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="signeup" type="button" class="btn btn-warning">
                Sign-up
              </Link>
            </div>
          )}

          <div className="basket-icon px-2">
            <button type="button" class="btn btn-dark position-relative">
            <Link to="cart">
              <FontAwesomeIcon
                className="fa-2xl"
                color="white"
                icon={faBasketShopping}
              />
              </Link>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
              {cart.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
           
              {/* <span className='fs-5 mt-5' style={{color:"white"}}>{cart.length}</span> */}
            
          </div>

          <div className="length">
            <p class="fs-6 text-white "></p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
