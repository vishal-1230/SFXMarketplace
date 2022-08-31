import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
      <div className="footer-left">
        <h3>Company<span>logo</span></h3>
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">Blog</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Faq</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">Company Name © 2015</p>
      </div>
      <div classNameName="footer-center">
        <div>
          <i classNameName="fa fa-map-marker"></i>
          <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
        </div>
        <div>
          <i classNameName="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>
        <div>
          <i classNameName="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>
      </div>
      <div classNameName="footer-right">
        <p classNameName="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div classNameName="footer-icons">
          <a href="#"><i classNameName="fa fa-facebook"></i></a>
          <a href="#"><i classNameName="fa fa-twitter"></i></a>
          <a href="#"><i classNameName="fa fa-linkedin"></i></a>
          <a href="#"><i classNameName="fa fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}
export default Footer