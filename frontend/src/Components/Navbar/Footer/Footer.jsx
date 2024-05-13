import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer py-3 bg-dark text-white mt-auto">
      <div className="container">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Copyright: <a href="#">HungerEats</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer