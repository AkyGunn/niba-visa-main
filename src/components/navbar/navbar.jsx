import React, { useRef, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const logoRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const logotext = 'NiBa-Visa';
  const colorPalette = ['#fff'];

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
        <p className="logo-text" onClick={() => window.open('https://maps.google.com/?q=Klosterstr.+12,+95028+Hof')} >Klosterstr. 12 95028 Hof</p>
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
        <li><a href="/" onClick={() => window.open('https://wa.me/+491724062056', '_blank')}>İletişim</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
