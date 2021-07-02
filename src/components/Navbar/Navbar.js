import React, { useEffect, useState } from 'react';
import navlogo from './logo/logo1/flixlogo.png'
import './Nav.css';
export default function Navbar() {
   const[show , handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll" ,() => {
      if (window.scrollY > 100) {
            handleShow(true);
      } else handleShow( false );
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
      className="nav_logo"
      src={navlogo}
      alt="Netflix Logo"
      />
  
    </div>
  )
}