import React from 'react'
import './Footer.css'
import inst_logo from '../Assests/instagram_icon.png'
import pintrest_icon from '../Assests/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={inst_logo} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintrest_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ManasKumar_22BCI0163 - All Right reserved</p>
        </div>
    </div>
  )
}

export default Footer