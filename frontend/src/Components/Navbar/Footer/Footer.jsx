import React from 'react';
import './Footer.css'; 
import logo from "../../../assets/logo_dup.png"

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-logo">
        <img src="logo.png" alt="hunger eats" />
      </div> */}
        <div className="footer-columns">
          <div className="footer-column">
            <img src={logo} alt="hunger eats" width={300} />
            <div>
              <p>Follow us:</p>
              {/* use social media symbols */}
            </div>
          </div>
          <div className="footer-column">
            <h3>Need Help</h3>
            <a href="#">Contact Us</a><br />
            <a href="#">Track Order</a><br/>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>My Account</p>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Carrers</p>
            <p>Support</p>
          </div>
          <div className="footer-column">
            <h3>More info</h3>
            <p>Privacy & Policy</p>
            <p>Site Map</p>
            
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Copyright: <a href="#">HungerEats</a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;