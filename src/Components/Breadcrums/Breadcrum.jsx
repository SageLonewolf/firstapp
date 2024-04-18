import React from 'react'
import { Link } from 'react-router-dom'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='Breadcrum'>
        <Link to='/'>HOME</Link> <img src={arrow_icon} alt="" /> <Link to="/">Shop</Link> <img src={arrow_icon} alt="" /> <Link to={`/${product.category}`}>{product.category}</Link> <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum