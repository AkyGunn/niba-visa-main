import React, { useRef, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const logoRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const logotext = 'NİBa Visa';
  const colorPalette = ['#be746e', '#e1ca73', '#72d0b5', '#53d5fb'];

  return (
    <nav>
      <div ref={logoRef} className="logo">
        {logotext.split('').map((char, index) => (
          <span
            key={index}
            style={{ color: colorPalette[index % colorPalette.length] }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#services-container" onClick={() => setMenuOpen(false)}>Hizmetlerimiz</a></li>
        <li><a href="#medical-container" onClick={() => setMenuOpen(false)}>Sağlık Personelleri</a></li>
        <li><a href="#aboutus-container" onClick={() => setMenuOpen(false)}>Hakkımızda</a></li>
        <li><a href="/" onClick={() => setMenuOpen(false)}>İletişim</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
