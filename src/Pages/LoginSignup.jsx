import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text"  placeholder='Name'/>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?</p><span className='login-span'> Login Here</span>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By coninuing I agree to the T&C of Use and Privacy Policy</p>

        </div>
      </div>
    </div>
  )
}
