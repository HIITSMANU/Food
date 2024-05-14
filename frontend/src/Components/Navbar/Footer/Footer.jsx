import React from 'react';
import './Footer.css'; 
import logo from "../../../assets/logo_dup.png"

const Footer = () => {
  const footerLogoStyle = {
    width: "50px",
    height: "50px",
    margin: "0 auto",
    display: "block",
    backgroundColor: "white",
  };
  return (
    <footer className="footer">
      {/* <div className="footer-logo">
        <img src="logo.png" alt="hunger eats" />
      </div> */}
        <div className="footer-columns">
        {/* <div className="foot_img">
        <img src={logo} alt="hunger eats" />
        </div> */}
        <div>
          <hr />
        </div>
          <div className="foot_contents">
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
        </div>
        <div>
          <hr />
        </div>
        <div>
          <div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Copyright: <a href="#home">HungerEats</a>
          </p>
            
          </div>
          <div>

          <img src={logo} style={footerLogoStyle}></img>
          </div>
        </div>
    </footer>
  );
};

export default Footer;