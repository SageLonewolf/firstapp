import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import nav_dropdown from '../Assests/dropdown_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [Menu,setMenu]  = useState("NONE")
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef();

  const dropdown_toggle =(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='Navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />  
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="Nav-menu">
            <li onMouseOver={()=>{setMenu("SHOP")}} onMouseOut={()=>{setMenu("NONE")}}><Link style={{ textDecoration: 'none', color: 'inherit'}} to='/'>SHOP</Link>{Menu==="SHOP"?<hr/>:<></>}</li>
            <li onMouseOver={()=>{setMenu("MEN")}} onMouseOut={()=>{setMenu("NONE")}}><Link style={{ textDecoration: 'none', color: 'inherit'}} to='/mens'>MEN</Link>{Menu==="MEN"?<hr/>:<></>}</li>
            <li onMouseOver={()=>{setMenu("WOMEN")}} onMouseOut={()=>{setMenu("NONE")}}><Link style={{ textDecoration: 'none', color: 'inherit'}} to='/womens'>WOMEN</Link>{Menu==="WOMEN"?<hr/>:<></>}</li>
            <li onMouseOver={()=>{setMenu("KIDS")}} onMouseOut={()=>{setMenu("NONE")}}><Link style={{ textDecoration: 'none', color: 'inherit'}} to='/kids'>KIDS</Link>{Menu==="KIDS"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
    {localStorage.getItem('auth-token') ? (
        <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>LogOut</button>
    ) : (
        console.log("Auth token not found"),
        <Link to='/signup'>
            <button>SIGN UP</button>
        </Link>
    )}
    <Link to='/cart'>
        <button className='cart'>
            <img src={cart_icon} alt="cart_icon" /> 
            <span>CART</span>
        </button>
    </Link>
    <div className="nav-car-count">{getTotalCartItems()}</div>
</div>
    </div>
  )
}

export default Navbar