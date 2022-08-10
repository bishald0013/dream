import { async } from '@firebase/util';
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useUserAuth } from '../UserAuthContext';
import './login.css'

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {logIn} = useUserAuth();

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")
    try {
      await logIn (email, password)
      navigate('/')
      
    } catch (err) {
      setError(err.message)
    }
  }
  
  return (
    <div className='container w-25 login_container'>
      <form  onSubmit = {handleSubmit}>
        {error && <div class="alert alert-primary" role="alert">
          {error}
         </div>}
        <h1 class="h3 mb-3 fw-normal">Please Log In</h1>

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
    
        <button class="w-100 btn btn-lg btn-primary" type="submit">Log In</button>
          <p class="mt-5 mb-3 text-muted">© 2022–2090</p>
      </form>
    </div>
  )
}
