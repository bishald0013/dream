
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { CartState } from '../../context/Context'
import CheckOutItem from './CheckOutItem'


function CheckOut() {
    const {state: {cart} } = CartState()

    const [total, setTotal] = useState()

    useEffect(() => {
      setTotal((
        cart.reduce((acc, curr) => acc + Number(curr.price )* curr.qty, 0)
      ))
    }, [cart])
    

  return (
    <div class="container mt-5">
  <main>
    <div class="py-5 text-center">
    
      <h2>Checkout form</h2>
      <p class="lead">By keeping your slogan short and sweet, it will be easier to remember. <br></br>A brief statement is more impactful than a long, wordy sentence.</p>
    </div>

    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-drak">Your cart</span>
          <span class="badge bg-dark rounded-pill">{cart.length}</span>
        </h4>
       {cart.map((prod) => {
        return(
            <CheckOutItem prod={prod} key={prod.key} />
        )
       })}

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code"/>
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </form>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <h2 for="firstName" class="form-label text-start fs-5 fw-bold">Amount to pay</h2>
            <h2 for="firstName" class="form-label text-start fs-5 fw-bold">
            <FontAwesomeIcon
                icon={faIndianRupeeSign}
                className="fa-x ms-2 me-1"
              /> {total}
            </h2>
          </li>
        </ul> 
      </div>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3 text-start">Billing address</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6 mt-4">
              <h2 for="firstName" class="form-label text-start fs-6 fw-light">First name</h2>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6 mt-4">
            <h2 for="firstName" class="form-label text-start fs-6 fw-light">Last Name</h2>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
            <h2 for="firstName" class="form-label text-start fs-6 fw-light">User Name</h2>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required=""/>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <h2 for="email" class="form-label text-start fs-6 fw-light">Email <span class="text-muted">(Optional)</span></h2>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
            <h2 for="firstName" class="form-label text-start fs-6 fw-light">Address</h2>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <h2 for="address2" class="form-label text-start fs-6 fw-light ">Address 2 <span class="text-muted">(Optional)</span></h2>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div class="col-md-5">
              <h2 for="country" class="form-label text-start fs-6 fw-light">Country</h2>
              <select class="form-select" id="country" required="">
                <option value="">Choose...</option>
                <option>India</option>
              
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
            <h2 for="country" class="form-label text-start fs-6 fw-light">State</h2>
              <select class="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>Assam</option>
                <option>Delhi</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3">
            <h2 for="country" class="form-label text-start fs-6 fw-light">Zip</h2>
              <input type="text" class="form-control" id="zip" placeholder="" required=""/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address"/>
            <h2 class="form-check-label text-start fs-6 fw-light pt-1" for="same-address">Shipping address is the same as my billing address</h2>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info"/>
            <h2 for="country" class="form-label text-start fs-6 fw-light pt-1">Save the information for next time</h2>
          </div>

          <hr class="my-4"/>

          <h4 class="mb-3 text-start fs-3  pt-1">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required=""/>
              <h2 class="form-check-label text-start fs-6 fw-light" for="credit">Credit card</h2>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <h2 class="form-check-label text-start fs-6 fw-light" for="debit">Debit card</h2>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required=""/>
              <h2 class="form-check-label text-start fs-6 fw-light" for="paypal">PayPal</h2>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <h2 for="cc-name" class="form-label text-start fs-5 fw-light">Name on card</h2>
              <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <h2 for="cc-number" class="form-label text-start fs-5 fw-light">Credit card number</h2>
              <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <h2 for="cc-expiration" class="form-label  text-start fs-5 fw-light">Expiration</h2>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <h2 for="cc-cvv" class="form-label text-start fs-5 fw-light">CVV</h2>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <button class="w-100 btn btn-dark btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">© 2022–2050 Dream Cature Studio</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>
  )
}

export default CheckOut