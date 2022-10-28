import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
    
      <footer className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <h3>SFX<span>Marketplace</span></h3>
          <p className={styles.footerLinks}>
            <a href="/" className={styles.link1}>Home</a>
            <a href="/">Blog</a>
            <a href="/">Pricing</a>
            <a href="/">About</a>
            <a href="/">Faq</a>
            <a href="/">Contact</a>
          </p>
          <p className={styles.footerCompanyName}>Company Name © 2015</p>
        </div>
        <div className={styles.footerCenter}>
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@company.com</a></p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <p className={styles.footerCompanyAbout}>
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className={styles.footerIcons}>
            <a href="/"><i className="fa fa-facebook"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
            <a href="/"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    </>)
}
export default Footer