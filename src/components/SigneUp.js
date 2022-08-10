import React, { useState } from 'react'
import './signup.css'
import {useUserAuth} from '../UserAuthContext'
import { async } from '@firebase/util'
import {useNavigate} from 'react-router-dom'

export default function SigneUp() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")

const {signUp} = useUserAuth()
const navigate = useNavigate()


const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    await signUp(email, password)
    navigate('/login') 
    
  } catch (err){
    setError(err.message)
  }

}

  return (
    <div className='container w-25 signup_container'>
      {error && <div class="alert alert-primary" role="alert">
 {error}
</div>}
      <form onSubmit={handleSubmit}>
        <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>

        <div class="form-floating mb-2">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>
      
        <div class="form-floating mb-2">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>
    
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
          <p class="mt-5 mb-3 text-muted">© 2022–2090</p>
      </form>
    </div>
  )
}
