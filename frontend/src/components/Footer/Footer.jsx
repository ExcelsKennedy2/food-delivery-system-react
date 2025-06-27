import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam impedit culpa, animi facilis repellat, minus officiis similique qui tenetur reprehenderit ipsam eos consequuntur ratione. Minima illo nostrum saepe hic.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center"></div>
        <div className="footer-content-right"></div>
    </div>
  )
}

export default Footer