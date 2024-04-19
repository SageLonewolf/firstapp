import React,{useState} from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:" ",
    password:" ",
    email:" "
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async ()=>{
    console.log("Login used",formData);
  }

  const signup = async ()=>{
    console.log("Signup used",formData);

  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "SignUp"?<input name='username' value={formData.username} onChange={changeHandler} type="text"  placeholder='Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state === "SignUp" ? (
         <p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}} className='login-span'>Login here</span></p>
          ) : (
         <p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("SignUp")}} className='login-span'>Click here</span></p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By coninuing I agree to the T&C of Use and Privacy Policy</p>

        </div>
      </div>
    </div>
  )
}
