import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logoSmall from '../images/lilogo_square.jpeg';
import logo from '../images/header_logo.png';
import menuIcon from '../images/menu_icon.png';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      if (!isScrolled) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="navbar-container" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <img src={scrolled ? logo : logoSmall} alt="Logo" className="navbar-logo" />
        <ul className={`nav-links-straight ${!scrolled ? 'show' : ''}`}>
          <li>Home,</li>
          <li>About,</li>
          <li>Contact,</li>
        </ul>
        <div className={`menu-icon ${scrolled ? 'show' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div
          className={`white-circle ${isHovering ? 'visible' : ''}`}
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        ></div> 
      </nav>
    </div>
  );
};

export default Navbar;