import React from 'react'
import './CSS/Login.css'

export const Login = () => {
  return (
    <div className='login'>
        <div className="login-container">
        <h1>Signup</h1>
        <div className="login-fields">
          <input type="text"  placeholder='Name'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Login</button>
        </div>
    </div> 
  )
}
